import React from 'react'

export default function PropertyGallery({ images }: { images: any[] }) {
    const cols = images.length > 1 ? 2 : 1
    var smallCols = 1
    if (images.length - 1 >= 2) smallCols = 2

    var rightGallery = []
    for (var i = 1; i < images.length; i++) {
        rightGallery.push(images[i])
    }

    return (
        <div className={'gap-4 grid grid-cols-' + cols}>
            <img
                src={images[0]}
                className="w-full h-full object-cover rounded-3xl"
            />
            {cols == 2 && (
                <div className={'grid gap-4 grid-cols-' + smallCols}>
                    {rightGallery.map((image) => {
                        return (
                            <img
                                key={Math.random() * 1000}
                                className="w-full h-fit rounded-3xl overflow-hidden"
                                src={image}
                            />
                        )
                    })}
                </div>
            )}
        </div>
    )
}
