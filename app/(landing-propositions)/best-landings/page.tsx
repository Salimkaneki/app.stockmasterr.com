"use client";

import React, { useState } from "react";
import { LuStar, LuEye, LuHeart, LuShare2, LuExternalLink } from "react-icons/lu";
import { PageLayout } from "@/components/ui/layout/PageLayout";
import { PageContainer } from "@/components/ui/layout/PageContainer";
import { PageHeader } from "@/components/ui/layout/PageHeader";
import { ActionButton } from "@/components/ui/actions/ActionButton";

interface LandingPage {
  id: string;
  title: string;
  description: string;
  category: string;
  views: number;
  likes: number;
  rating: number;
  image: string;
  tags: string[];
  status: "published" | "draft" | "archived";
}

export default function BestLandingsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const landingPages: LandingPage[] = [
    {
      id: "1",
      title: "Boutique Mode Élégante",
      description: "Page d'accueil moderne pour une boutique de mode haut de gamme",
      category: "fashion",
      views: 1250,
      likes: 89,
      rating: 4.8,
      image: "/api/placeholder/400/250",
      tags: ["mode", "élégant", "minimaliste"],
      status: "published",
    },
    {
      id: "2",
      title: "Café Artisan Local",
      description: "Design chaleureux pour un café mettant en avant les produits locaux",
      category: "food",
      views: 980,
      likes: 67,
      rating: 4.6,
      image: "/api/placeholder/400/250",
      tags: ["café", "artisanal", "local"],
      status: "published",
    },
    {
      id: "3",
      title: "Salon de Coiffure Premium",
      description: "Interface sophistiquée pour un salon de coiffure de luxe",
      category: "beauty",
      views: 756,
      likes: 45,
      rating: 4.7,
      image: "/api/placeholder/400/250",
      tags: ["coiffure", "luxe", "premium"],
      status: "published",
    },
    {
      id: "4",
      title: "Boutique Tech Gadgets",
      description: "Design moderne et technologique pour une boutique d'électronique",
      category: "tech",
      views: 1540,
      likes: 112,
      rating: 4.9,
      image: "/api/placeholder/400/250",
      tags: ["technologie", "gadgets", "moderne"],
      status: "published",
    },
  ];

  const categories = [
    { id: "all", name: "Toutes les catégories" },
    { id: "fashion", name: "Mode" },
    { id: "food", name: "Alimentation" },
    { id: "beauty", name: "Beauté" },
    { id: "tech", name: "Technologie" },
  ];

  const filteredPages = selectedCategory === "all"
    ? landingPages
    : landingPages.filter(page => page.category === selectedCategory);

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="Meilleures Pages d'Accueil"
          description="Découvrez les meilleures pages d'accueil créées par notre communauté"
        >
          <ActionButton
            variant="primary"
            icon={<LuExternalLink className="w-4 h-4" />}
            onClick={() => console.log("Voir toutes les pages")}
          >
            Explorer Plus
          </ActionButton>
        </PageHeader>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-blue-100 text-blue-700 border border-blue-200"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Landing Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPages.map((page) => (
            <div key={page.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Image */}
              <div className="aspect-video bg-gray-200 relative">
                <img
                  src={page.image}
                  alt={page.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    page.status === "published"
                      ? "bg-green-100 text-green-700"
                      : page.status === "draft"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }`}>
                    {page.status === "published" ? "Publié" : page.status === "draft" ? "Brouillon" : "Archivé"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {page.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {page.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {page.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <LuEye className="w-4 h-4" />
                      {page.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <LuHeart className="w-4 h-4" />
                      {page.likes}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <LuStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {page.rating}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <ActionButton
                    variant="outline"
                    size="sm"
                    icon={<LuEye className="w-4 h-4" />}
                    onClick={() => console.log(`Voir ${page.title}`)}
                    className="flex-1"
                  >
                    Voir
                  </ActionButton>
                  <ActionButton
                    variant="outline"
                    size="sm"
                    icon={<LuShare2 className="w-4 h-4" />}
                    onClick={() => console.log(`Partager ${page.title}`)}
                  >
                    Partager
                  </ActionButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <ActionButton
            variant="secondary"
            onClick={() => console.log("Charger plus")}
          >
            Charger Plus de Pages
          </ActionButton>
        </div>
      </PageContainer>
    </PageLayout>
  );
}