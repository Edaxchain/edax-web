import Parser from 'rss-parser';
import { Suspense } from 'react';
import UpdatesContent from './Update';



async function getData(url: string) {
    const parser = new Parser();
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            },
            next: { revalidate: 3600 }
        });

        const xml = await response.text()
        const feed = await parser.parseString(xml);
        if (!feed || !feed.items) return [];
        return {
            source: feed.title,
            items: feed.items.map(item => ({
                title: item.title || '',
                link: item.link || '',
                pubDate: item.pubDate || '',
                contentSnippet: item.contentSnippet || item.description || '',
                enclosure: item.enclosure ? { url: item.enclosure.url } : null,
                content: item['content:encoded'] || item.content || item.description || '',
                //description: item.description || '',
            })).slice(0, 5)
        }
            ;
    } catch (error) {
        console.error(`Error fetching from ${url}:`, error);
        return [];
    }
}




export default async function UpdatePage() {
    const SiamBC = process.env.SiamBC_RSS!
    const Stellar = process.env.Stellar_RSS!

    const [siamNews, stellarBlogs] = await Promise.all([
        getData(SiamBC),
        getData(Stellar)

    ]);
    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12 border-l-4 border-primary pl-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-2">
                        Latest News and Blogs
                    </h1>
                    <p className="text-text-sub font-medium">อัปเดตข่าวสารวงการบล็อกเชนจาก EDAX Blockchain</p>
                </div>
                <Suspense fallback={<div className="text-primary animate-pulse font-black italic">LOADING...</div>}>
                    <UpdatesContent news={siamNews} blogs={stellarBlogs} />
                </Suspense>
            </div>
        </main>
    );
}

