export default function sitemap(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/xml')

  res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
                <urlset
                      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
                <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


                <url>
                  <loc>https://thecute.netlify.app/</loc>
                  <lastmod>2023-02-20T04:20:46+00:00</lastmod>
                  <priority>1.00</priority>
                </url>
                <url>
                  <loc>https://thecute.netlify.app/menu/coffee</loc>
                  <lastmod>2023-02-20T04:20:46+00:00</lastmod>
                  <priority>0.80</priority>
                </url>
                <url>
                  <loc>https://thecute.netlify.app/dogs</loc>
                  <lastmod>2023-02-20T04:20:46+00:00</lastmod>
                  <priority>0.80</priority>
                </url>
                <url>
                  <loc>https://thecute.netlify.app/cats</loc>
                  <lastmod>2023-02-20T04:20:46+00:00</lastmod>
                  <priority>0.80</priority>
                </url>
                <url>
                  <loc>https://thecute.netlify.app/location</loc>
                  <lastmod>2023-02-20T04:20:46+00:00</lastmod>
                  <priority>0.80</priority>
                </url>
                <url>
                  <loc>https://thecute.netlify.app/menu/tea</loc>
                  <lastmod>2023-02-20T04:20:46+00:00</lastmod>
                  <priority>0.80</priority>
                </url>
                <url>
                  <loc>https://thecute.netlify.app/menu/drink</loc>
                  <lastmod>2023-02-20T04:20:46+00:00</lastmod>
                  <priority>0.80</priority>
                </url>
                <url>
                  <loc>https://thecute.netlify.app/menu/other</loc>
                  <lastmod>2023-02-20T04:20:46+00:00</lastmod>
                  <priority>0.80</priority>
                </url>

                </urlset>
  `;

  res.end(xml);
}