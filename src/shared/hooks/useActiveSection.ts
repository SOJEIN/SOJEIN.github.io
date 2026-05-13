import { useEffect, useRef, useState } from 'react';

export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState<string>(sectionIds[0] ?? '');
  const ratios = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          ratios.current.set(`#${e.target.id}`, e.intersectionRatio);
        });

        let best = { id: '', ratio: -1 };
        ratios.current.forEach((ratio, id) => {
          if (ratio > best.ratio) best = { id, ratio };
        });

        if (best.ratio > 0) setActive(best.id);
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id.replace('#', ''));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds.join(',')]);

  return active;
}
