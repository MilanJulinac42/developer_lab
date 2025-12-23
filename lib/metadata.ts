import { Metadata } from 'next';

const siteConfig = {
  name: 'Developer.Lab',
  description: 'Nauči Data Science od nule do profesionalca. Python, Machine Learning, Deep Learning i više. Praktični kursevi sa sertifikatima.',
  url: 'https://developer.lab', // TODO: Replace with actual domain
  ogImage: '/og-image.png', // TODO: Create OG image
  twitterHandle: '@developerlab',
};

export function createMetadata({
  title,
  description,
  image,
  path = '',
  type = 'website',
  noIndex = false,
}: {
  title: string;
  description?: string;
  image?: string;
  path?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
}): Metadata {
  const metaDescription = description || siteConfig.description;
  const metaImage = image || siteConfig.ogImage;
  const url = `${siteConfig.url}${path}`;

  return {
    title: `${title} - ${siteConfig.name}`,
    description: metaDescription,
    keywords: [
      'Data Science kursevi',
      'Python programiranje',
      'Machine Learning',
      'Deep Learning',
      'AI kursevi',
      'Data Science edukacija',
      'online kursevi Srbija',
      'programiranje kursevi',
      'IT edukacija',
      'Data Scientist',
    ],
    authors: [{ name: 'Milan Vulić' }],
    creator: 'Developer.Lab',
    publisher: 'Developer.Lab',
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: 'sr_RS',
      url,
      title,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title,
      description: metaDescription,
      images: [metaImage],
    },
  };
}

export function createCourseMetadata(course: {
  title: string;
  description: string;
  slug: string;
  price: string;
  level: string;
  duration: string;
}): Metadata {
  const metadata = createMetadata({
    title: course.title,
    description: course.description,
    path: `/courses/${course.slug}`,
    type: 'article',
  });

  // Add structured data for Course
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: 'Developer.Lab',
      sameAs: 'https://developer.lab',
    },
    offers: {
      '@type': 'Offer',
      price: course.price,
      priceCurrency: 'RSD',
    },
    educationalLevel: course.level,
    timeRequired: course.duration,
    availableLanguage: 'sr',
    inLanguage: 'sr',
  };

  return {
    ...metadata,
    other: {
      'application/ld+json': JSON.stringify(structuredData),
    },
  };
}

export { siteConfig };
