import { ModeToggle } from '@/shared/components/modetoggle/modetoggle';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-y-5">
      <ModeToggle />
      <div className="flex justify-center px-5 text-2xl text-foreground">
        Exercitation quis enim esse eiusmod mollit consectetur consequat enim
        ipsum.
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <div className=" flex h-20 items-center justify-center rounded  bg-primary  px-5 text-primary-foreground">
          Primary
        </div>
        <div className="flex h-20 items-center justify-center rounded  bg-secondary px-5 text-secondary-foreground">
          Secondary
        </div>
        <div className="flex h-20 items-center justify-center rounded bg-danger px-5  text-danger-foreground">
          Danger
        </div>
        <div className="flex h-20 items-center justify-center rounded bg-warning px-5  text-warning-foreground">
          Warning
        </div>
        <div className="flex h-20 items-center justify-center rounded bg-success px-5  text-success-foreground">
          Success
        </div>
        <div className="flex h-20 items-center justify-center rounded bg-info px-5  text-info-foreground">
          Info
        </div>
        <div className=" flex h-20 items-center justify-center rounded  bg-accent px-5 text-accent-foreground">
          Accent
        </div>
        <div className="  flex h-20 items-center justify-center rounded  bg-popover px-5 text-popover-foreground">
          Popover
        </div>
        <div className=" flex h-20 items-center justify-center rounded  bg-card px-5 text-card-foreground">
          Card
        </div>
        <div className=" flex h-20 items-center justify-center rounded  bg-muted px-5 text-muted-foreground">
          Muted
        </div>
        <div className=" flex h-20 items-center justify-center rounded bg-destructive px-5 text-destructive-foreground">
          Destructive
        </div>
        <div className=" flex h-20 items-center justify-center rounded  bg-background px-5">
          Base
        </div>
        <div className=" flex h-20 items-center justify-center rounded  bg-input px-5 text-white">
          Input
        </div>
        <div className=" flex h-20 items-center justify-center rounded  bg-ring px-5 text-white">
          Ring
        </div>
        <div className=" flex h-20 items-center justify-center rounded  bg-border px-5">
          Border
        </div>
        <div className=" flex h-20 items-center justify-center rounded   bg-black px-5 text-white">
          Black
        </div>
        <div className=" flex h-20 items-center justify-center rounded   bg-white px-5 text-black">
          White
        </div>
      </div>
    </main>
  );
}
