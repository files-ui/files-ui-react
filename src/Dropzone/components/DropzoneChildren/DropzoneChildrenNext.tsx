import * as React from "react";
import {
  DropzoneLocalizerSelector,
  Localization,
  LocalLabels,
} from "@files-ui/core";
import "./DropzoneChildren.css";

type DropzoneChildrenNextProps = {
  children?: React.ReactNode | [];
  label?: string;
  localization?: Localization;
  lazyLoad?: boolean;
  lazyLoadBuffer?: number;
  onAbortFile?: (id: string | number) => void;
};

type LazyRenderItemProps = {
  children: React.ReactNode;
  rootMargin: string;
};

const LazyRenderItem: React.FC<LazyRenderItemProps> = ({
  children,
  rootMargin,
}: LazyRenderItemProps) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isVisible) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return <div ref={ref}>{isVisible ? children : null}</div>;
};

const DropzoneChildrenNext: React.FC<DropzoneChildrenNextProps> = (
  props: DropzoneChildrenNextProps
) => {
  const {
    children,
    label,
    localization,
    lazyLoad = false,
    lazyLoadBuffer = 300,
    onAbortFile,
  } = props;

  const isEmptyArray = Array.isArray(children) && children.length === 0;
  const DropzoneLocalizer: LocalLabels =
    DropzoneLocalizerSelector(localization);

  if (!children || isEmptyArray) {
    return (
      <div className="files-ui-dropzone-children-container">
        <label>{label || (DropzoneLocalizer.defaultLabel as string)}</label>
      </div>
    );
  }

  const injectAbortHandler = (child: React.ReactNode): React.ReactNode => {
    if (!React.isValidElement(child) || !onAbortFile) {
      return child;
    }

    const childProps = child.props as {
      id?: string | number;
      onAbort?: (id: string | number) => void;
    };

    if (childProps.id === undefined || childProps.onAbort) {
      return child;
    }

    return React.cloneElement(child, {
      onAbort: onAbortFile,
    });
  };

  if (!lazyLoad) {
    return (
      <div className="files-ui-dropzone-children-container">
        {React.Children.map(children, injectAbortHandler)}
      </div>
    );
  }

  return (
    <div className="files-ui-dropzone-children-container">
      {React.Children.map(children, (child) => (
        <LazyRenderItem rootMargin={`${lazyLoadBuffer}px`}>
          {injectAbortHandler(child)}
        </LazyRenderItem>
      ))}
    </div>
  );
};

export default DropzoneChildrenNext;
