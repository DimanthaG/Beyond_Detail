import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import fs from 'fs';

const client = createClient({
    projectId: 'trp6l9ar',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: false,
});

const builder = imageUrlBuilder(client);

const urlFor = (source) => {
    return builder
        .image(source)
        .format('webp')
        .quality(85);
};

const getImageUrl = (source, width, height) => {
    if (!source || !source.asset) return '/images/hero-home.avif';

    if (source.asset._ref) {
        try {
            let imageBuilder = urlFor(source);
            if (width) imageBuilder = imageBuilder.width(width);
            if (height) imageBuilder = imageBuilder.height(height);
            return imageBuilder.url();
        } catch (e) {
            return 'ERROR: ' + e.message;
        }
    }

    if (source.asset.url) {
        return source.asset.url;
    }

    return '/images/hero-home.avif';
};

const sampleBlock = {
    "_key": "c0d24e930629",
    "_type": "image",
    "alt": "Porsche window tint beyond detail toronto scarborough ",
    "asset": {
        "_ref": "image-17872cdf4058d08ad1d592212950be4c396ab60a-1200x1600-jpg",
        "_type": "reference"
    }
};

const url = getImageUrl(sampleBlock, 1200);
fs.writeFileSync('verification_result.txt', url);
console.log("Done");
