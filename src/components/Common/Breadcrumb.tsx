import Link from "next/link";
import { BreadcrumbProps } from "../../types/breadcrumb"; // Adjust the import path based on your project structure

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  pageName,
  pageDescription,
}) => {
  return (
    <div className="dark:bg-darkmode relative z-10 overflow-hidden pb-[60px] pt-[120px] md:pt-[130px] lg:pt-[160px]">
      <div className=""></div>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="text-center">
              <h1 className="text-black dark:text-white mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] md:leading-[1.2]">
                {pageName}
              </h1>
              <p className="text-black dark:text-black-6 mb-5 text-base">
                {pageDescription}
              </p>

              <ul className="flex items-center justify-center gap-[10px]">
                <li>
                  <Link
                    href="/"
                    className="text-black dark:text-white dark:text-opacity-50 flex items-center gap-[10px] text-base font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <p className="text-body-color flex items-center gap-[10px] text-base font-medium">
                    <span className="text-body-color dark:text-dark-6"> / </span>
                    {pageName}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
