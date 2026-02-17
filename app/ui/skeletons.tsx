

// Shimmer animation class
const shimmer =
  "animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent relative overflow-hidden";

const shimmerFaint =
  "animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent relative overflow-hidden";

// Skeleton for a single card
export function ProductCardSkeleton() {
  return (
    <div className="border border-cyan-200 rounded-md bg-cyan-50 shadow-sm p-2 flex flex-col items-center text-center">
      {/* Image skeleton */}
      <div
        className={`w-24 h-24 md:w-28 md:h-28 mb-2 rounded-md bg-gray-200 relative ${shimmerFaint}`}
      />

      {/* Title skeleton */}
      <div className={`w-3/4 h-4 mb-1 rounded bg-gray-200 ${shimmerFaint}`} />

      {/* Description skeleton */}
      <div className={`w-5/6 h-3 mb-1 rounded bg-gray-200 ${shimmerFaint}`} />

      {/* Price skeleton */}
      <div className={`w-1/4 h-3 mb-1 rounded bg-gray-200 ${shimmerFaint}`} />

      {/* Author skeleton */}
      <div className={`w-1/2 h-2 rounded bg-gray-200 ${shimmerFaint}`} />

      {/* Button skeleton */}
      <div className={`w-1/3 h-6 mt-2 rounded bg-gray-200 ${shimmerFaint}`} />
    </div>
  );
}

// Skeleton grid
export function ExploreSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-2">
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />


    </div>
  );
}
