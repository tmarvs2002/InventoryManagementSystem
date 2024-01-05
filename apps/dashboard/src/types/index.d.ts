declare module "*.png" {
    const path: string;
    export default path;
};

declare module "*.jpg" {
    const path: string;
    export default path;
}

declare module "\*.svg" {
    import { FC, SVGProps } from "react";
    const ReactComponent: FC<SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}