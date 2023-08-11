import {useState, useRef,useEffect} from "react";

const useInView = (selector, animation) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "0px",
          threshold: 0.3
      }
      );
      observer.observe(ref.current);
  
      return () => observer.disconnect();
    }, [isIntersecting, animation, selector]);
  
    useEffect(() => {
      if (isIntersecting) {
        ref.current.querySelectorAll(selector).forEach((el) => {
          el.classList.add(animation);
        });
      } else {
        ref.current.querySelectorAll(selector).forEach((el) => {
          el.classList.remove(animation);
        });
      }
    }, [isIntersecting, animation, selector]);

    return ref;
}
 
export {useInView};