import { useEffect, useRef, useState } from 'react'
import { FiMaximize2, FiX } from 'react-icons/fi'

function assetUrl(src) {
  return src?.startsWith('/') ? `${import.meta.env.BASE_URL}${src.slice(1)}` : src
}

function ProjectGallery({ images = [], projectTitle }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const closeButtonRef = useRef(null)
  const previousFocusRef = useRef(null)

  const openPreview = (image) => {
    previousFocusRef.current = document.activeElement
    setSelectedImage(image)
  }

  const closePreview = () => {
    setSelectedImage(null)
    window.requestAnimationFrame(() => previousFocusRef.current?.focus())
  }

  useEffect(() => {
    if (!selectedImage) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') closePreview()
    }

    window.addEventListener('keydown', closeOnEscape)
    closeButtonRef.current?.focus()
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [selectedImage])

  if (images.length === 0) {
    return (
      <section aria-labelledby="gallery-title">
        <p className="eyebrow">Project media</p>
        <h2 className="mt-3 text-2xl font-black text-white" id="gallery-title">Repository screenshots</h2>
        <div className="mt-5 grid min-h-52 place-items-center rounded-2xl border border-dashed border-slate-700 bg-slate-900/45 p-8 text-center">
          <div>
            <p className="text-lg font-black text-white">No project screenshots are published yet.</p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-400">
              This case study uses verified repository evidence and does not substitute a fictional interface.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section aria-labelledby="gallery-title">
      <p className="eyebrow">Project media</p>
      <h2 className="mt-3 text-2xl font-black text-white" id="gallery-title">Real repository assets</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
        These images come from the project source or its verified running interface. Select an image to enlarge it.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <figure className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900" key={image.src}>
            <button
              aria-label={`Enlarge ${image.alt}`}
              className="focus-ring group relative block aspect-[4/3] w-full overflow-hidden bg-slate-950"
              onClick={() => openPreview(image)}
              type="button"
            >
              <img
                alt={image.alt}
                className="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-[1.02]"
                decoding="async"
                height={image.height}
                loading="lazy"
                src={assetUrl(image.src)}
                width={image.width}
              />
              <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-slate-950/85 text-white">
                <FiMaximize2 aria-hidden="true" />
              </span>
            </button>
            <figcaption className="border-t border-slate-800 px-4 py-3 text-sm leading-6 text-slate-400">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {selectedImage && (
        <div
          aria-labelledby="lightbox-title"
          aria-modal="true"
          className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/95 p-4 backdrop-blur"
          onClick={closePreview}
          onKeyDown={(event) => {
            if (event.key === 'Tab') {
              event.preventDefault()
              closeButtonRef.current?.focus()
            }
          }}
          role="dialog"
        >
          <div className="relative max-h-[92vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <h2 className="sr-only" id="lightbox-title">{projectTitle} image preview</h2>
            <button
              aria-label="Close image preview"
              className="focus-ring absolute right-2 top-2 z-10 grid h-11 w-11 place-items-center rounded-full bg-slate-950 text-white shadow-xl"
              onClick={closePreview}
              ref={closeButtonRef}
              type="button"
            >
              <FiX aria-hidden="true" size={22} />
            </button>
            <img
              alt={selectedImage.alt}
              className="max-h-[80vh] w-full rounded-2xl bg-slate-900 object-contain"
              height={selectedImage.height}
              src={assetUrl(selectedImage.src)}
              width={selectedImage.width}
            />
            <p className="mt-3 text-center text-sm text-slate-300">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectGallery
