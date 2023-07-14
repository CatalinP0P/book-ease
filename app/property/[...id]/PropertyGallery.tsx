import React from 'react'

export default function PropertyGallery({ images }: { images: any[] }) {
    const cols = images.length > 1 ? 2 : 1
    var smallCols = 1
    var smallRows = 1
    if (images.length - 1 >= 2) smallCols = 2
    if (images.length - 1 >= 2) smallRows = 2

    var rightGallery = []
    for (var i = 1; i < images.length; i++) {
        rightGallery.push(images[i])
    }

    return (
        <div
            className={
                'overflow-hidden max-h-[500px] left-0 top-0 w-full h-full gap-2 md:gap-4 grid grid-cols-' +
                cols
            }
        >
            <img
                src={images[0]}
                className="w-full h-full object-cover rounded-3xl max-h-[500px]"
            />
            {cols == 2 && (
                <div
                    className={
                        'grid gap-2 md:gap-4 grid-rows-' +
                        smallRows +
                        ' grid-cols-' +
                        smallCols
                    }
                >
                    {rightGallery.map((image) => {
                        return (
                            <img
                                key={Math.random() * 1000}
                                className="w-full h-full rounded-3xl overflow-hidden object-cover"
                                src={image}
                            />
                        )
                    })}
                </div>
            )}
        </div>
    )
}
