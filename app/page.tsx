import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl p-8">
        <header className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-black dark:text-zinc-50">Trang Home đơn giản</h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Demo các components: Button, Input, Card, Badge.</p>
        </header>

        <section className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Liên hệ</CardTitle>
              <CardDescription>Nhập email và gửi yêu cầu</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="you@domain.com" />
              </div>
              <Button>Gửi</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Trạng thái</CardTitle>
              <CardDescription>Một số biến thể Badge và Button</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>Default</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button>Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Sử dụng components để xây dựng UI nhanh.</p>
            </CardFooter>
          </Card>
        </section>
      </main>
    </div>
  );
}
