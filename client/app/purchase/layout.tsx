import ProductHighlight from "../../components/product/Product.highlight";
import ProductRecommended from "../../components/product/details/Product.recomended";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <Search /> */}
      <div>{children}</div>
      <Suspense>
        <ProductRecommended id={""} />
      </Suspense>
    </div>
  );
}
