import { allBlogPosts, getPostBySlug } from "@/data/blog-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-32">
      {/* Editorial Container for Professional Readability */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation / Back Link */}
        <div className="mb-10">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm font-medium text-olive-800 hover:text-yellow-500 transition-colors group"
          >
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">&larr;</span> 
            Back to all articles
          </Link>
        </div>

        {/* Header Section */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-stone-50 text-lime-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-md">
              {post.category}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 text-sm">{post.date}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 text-sm">{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2] mb-6">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            {post.excerpt}
          </p>
        </header>


        {/* Featured Image */}
        {post.image && (
          <div className="relative w-full h-95 sm:h-120 mb-12 rounded-xl overflow-hidden bg-slate-50 shadow-sm">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              priority
              className="object-cover" 
            />
          </div>
        )}

        {/* Article Content Area */}
        <div className="prose prose-emerald max-w-none text-slate-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 pt-6 tracking-tight">
            Overview & Importance
          </h2>
          <p>
            In modern industrial environments, managing operational equipment efficiently is critical to maintaining a competitive edge. Ensuring that systems operate smoothly requires adherence to strict industry benchmarks, proactive evaluations, and reliable deployment procedures.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 pt-6 tracking-tight">
            Key Strategic Takeaways
          </h2>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-600">
            <li>Regular inspection workflows prevent catastrophic mid-cycle failures.</li>
            <li>Investing in routine check-ups significantly cuts down long-term overhead energy costs.</li>
            <li>Partnering with specialized technical teams ensures seamless integration and rapid emergency response times.</li>
          </ul>

          <blockquote className="border-l-2 border-emerald-600 pl-6 my-8 italic text-slate-800 font-medium">
            &ldquo;Proactive asset management is no longer optional—it is the foundational pillar of reliable facility operations and cost optimization.&rdquo;
          </blockquote>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 pt-6 tracking-tight">
            Conclusion
          </h2>
          <p>
            By prioritizing proper oversight and keeping up with regular maintenance routines outlined in our core guidelines, facilities can achieve optimal performance, higher reliability scores, and expanded asset lifespans.
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
          <Link 
            href="/blog" 
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            &larr; Return to blog overview
          </Link>
          <div className="text-xs text-slate-400">
            Share insights &bull; Professional Edition
          </div>
        </div>

      </article>
    </main>
  );
}