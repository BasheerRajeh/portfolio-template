import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useBreadcrumb() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return [];

    let path = "/";

    const subPaths = pathname.split("/").slice(1);
    const breadcrumbPaths = subPaths.map((subPath) => {
        path += subPath + "/";
        return { href: path, label: subPath };
    });

    return breadcrumbPaths;
}
