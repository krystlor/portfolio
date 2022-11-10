import React from "react";
import PropTypes, { InferProps } from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProjectImagePropTypes = {
  projectImgFilename: PropTypes.string.isRequired,
  projectActualNumber: PropTypes.number.isRequired,
};
type ProjectImageTypes = InferProps<typeof ProjectImagePropTypes>;

export const ProjectImage = ({
  projectImgFilename,
  projectActualNumber,
}: ProjectImageTypes) => {
  return (
    <LazyLoadImage
      src={`portfolio/${projectImgFilename}.webp`}
      afterLoad={() => {
        const loadedProject = document.querySelector(
          `[data-visible=project_${projectActualNumber}]`
        ) as HTMLCanvasElement;
        loadedProject.style.visibility = "visible";
      }}
      effect="blur"
      alt={projectImgFilename}
      srcSet={`portfolio/${projectImgFilename}_508.webp 508w, 
               portfolio/${projectImgFilename}_538.webp 538w, 
               portfolio/${projectImgFilename}_618.webp 618w, 
               portfolio/${projectImgFilename}_688.webp 688w, 
               portfolio/${projectImgFilename}_928.webp 928w, 
               portfolio/${projectImgFilename}.webp 508w`}
      sizes={`(max-width: 767px) 508px, 
              (min-width:768px) and (max-width: 991px) 688px,	
              (min-width:992px) and (max-width: 1199px) 928px, 
              (min-width:1200px) and (max-width: 1399px) 538px, 
              (min-width:1400px) 618px`}
    />
  );
};
ProjectImage.propTypes = ProjectImagePropTypes;
