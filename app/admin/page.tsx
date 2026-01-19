"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TiptapEditor from "@/components/TiptapEditor";
import Link from "next/link";

interface Page {
  id: string;
  slug: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export default function AdminDashboard() {
  const [pages, setPages] = useState<Page[]>([]);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const res = await fetch("/api/pages");
      const data = await res.json();
      setPages(data);
    } catch (err) {
      setMessage("Error loading pages");
    }
  };

  const handleSave = async () => {
    if (!formData.slug || !formData.title || !formData.content) {
      setMessage("All fields are required");
      return;
    }

    setLoading(true);
    try {
      if (selectedPage) {
        // Update existing page
        await fetch(`/api/pages/${selectedPage.slug}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: formData.title,
            content: formData.content,
          }),
        });

        setMessage("Page updated successfully");
        fetchPages();
        setSelectedPage(null);
      } else {
        // Create new page
        await fetch("/api/pages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        setMessage("Page created successfully");
        fetchPages();
      }
      setFormData({ slug: "", title: "", content: "" });
      setIsCreating(false);
    } catch (err) {
      setMessage("Error saving page");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (page: Page) => {
    setSelectedPage(page);
    setFormData({ slug: page.slug, title: page.title, content: page.content });
    setIsCreating(false);
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Delete this page?")) return;

    try {
      await fetch(`/api/pages/${slug}`, { method: "DELETE" });
      setMessage("Page deleted");
      fetchPages();
      if (selectedPage?.slug === slug) {
        setSelectedPage(null);
        setFormData({ slug: "", title: "", content: "" });
      }
    } catch (err) {
      setMessage("Error deleting page");
    }
  };

  const handleCancel = () => {
    setSelectedPage(null);
    setFormData({ slug: "", title: "", content: "" });
    setIsCreating(false);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="container-custom max-w-6xl">
          <h1 className="font-display text-4xl font-bold mb-8">Admin CMS</h1>

          {message && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800">
              {message}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pages List */}
            <div className="lg:col-span-1">
              <button
                onClick={() => {
                  setIsCreating(true);
                  setSelectedPage(null);
                  setFormData({ slug: "", title: "", content: "" });
                }}
                className="w-full mb-4 px-4 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                + New Page
              </button>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="p-4 font-semibold text-lg border-b border-gray-200">
                  Pages
                </h2>
                <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                  {pages.map((page) => (
                    <button
                      key={page.id}
                      onClick={() => handleEdit(page)}
                      className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${
                        selectedPage?.id === page.id
                          ? "bg-primary-50 border-l-4 border-primary-600"
                          : ""
                      }`}
                    >
                      <p className="font-semibold text-sm">{page.title}</p>
                      <p className="text-gray-500 text-xs">/{page.slug}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Editor */}
            <div className="lg:col-span-2">
              {isCreating || selectedPage ? (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6">
                    {selectedPage ? "Edit Page" : "Create New Page"}
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Slug (URL)
                      </label>
                      <input
                        type="text"
                        value={formData.slug}
                        onChange={(e) =>
                          setFormData({ ...formData, slug: e.target.value })
                        }
                        disabled={!!selectedPage}
                        placeholder="e.g., home-hero"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 disabled:bg-gray-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        placeholder="Page title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Content
                      </label>
                      <TiptapEditor
                        content={formData.content}
                        onChange={(content) =>
                          setFormData({ ...formData, content })
                        }
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={handleSave}
                        disabled={loading}
                        className="flex-1 px-4 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50"
                      >
                        {loading ? "Saving..." : "Save Page"}
                      </button>
                      {selectedPage && (
                        <button
                          onClick={() => handleDelete(selectedPage.slug)}
                          className="px-4 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      )}
                      <button
                        onClick={handleCancel}
                        className="px-4 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <p className="text-gray-600 mb-4">
                    Select a page to edit or create a new one
                  </p>
                  <Link
                    href="/"
                    className="text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    ← Back to site
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
