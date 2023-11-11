"use client";

import { ActionIcon } from "@/components/icons/action-icon";
import { CmsIcon } from "@/components/icons/cms-icon";
import { FramerIcon } from "@/components/icons/framer-icon";
import { HorizontalOptionIcon } from "@/components/icons/horizontal-option-icon";
import { InternetIcon } from "@/components/icons/internet-icon";
import { LayoutIcon } from "@/components/icons/layout-icon";
import { PlayIcon } from "@/components/icons/play-icon";
import { PlusIcon } from "@/components/icons/plus-icon";
import { PlusSquareIcon } from "@/components/icons/plus-square-icon";
import { SettingIcon } from "@/components/icons/setting-icon";
import { TextIcon } from "@/components/icons/text-icon";
import { TabsProject } from "@/components/tabs-project";
import { TitlePopover } from "@/components/title-popover";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();
  return (
    <main>
      <nav className="h-[7vh] flex gap-1 items-center border-b border-neutral-200 px-4">
        <div className="p-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-1 rounded shadow-2xl border">
                <FramerIcon className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="bottom"
              align="start"
              className="w-[270px] shadow-2xl border-none"
            >
              <DropdownMenuItem
                onSelect={() => router.push("/")}
                className="focus:bg-primary focus:text-primary-foreground"
              >
                Go to dashboard
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Quick Actions...
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>File</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="shadow-2xl border-none w-[120px]">
                  <DropdownMenuItem>
                    New
                    <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Page</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Edit</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="shadow-2xl border-none w-[120px]">
                  <DropdownMenuItem>
                    New
                    <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Page</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>View</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="shadow-2xl border-none w-[120px]">
                  <DropdownMenuItem>
                    New
                    <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Page</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Tool</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="shadow-2xl border-none w-[120px]">
                  <DropdownMenuItem>
                    New
                    <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Page</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Layout</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="shadow-2xl border-none w-[120px]">
                  <DropdownMenuItem>
                    New
                    <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Page</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Text</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="shadow-2xl border-none w-[120px]">
                  <DropdownMenuItem>
                    New
                    <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Page</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Graphic</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="shadow-2xl border-none w-[120px]">
                  <DropdownMenuItem>
                    New
                    <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Page</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Component</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="shadow-2xl border-none w-[120px]">
                  <DropdownMenuItem>
                    New
                    <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Page</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Preview</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="shadow-2xl border-none w-[120px]">
                  <DropdownMenuItem>
                    New
                    <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Page</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Code</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="shadow-2xl border-none w-[120px]">
                  <DropdownMenuItem>
                    New
                    <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Page</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Preferences</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="shadow-2xl border-none w-[120px]">
                  <DropdownMenuItem>
                    New
                    <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Page</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Site Settings</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="shadow-2xl border-none w-[120px]">
                  <DropdownMenuItem>
                    New
                    <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Page</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Help</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="shadow-2xl border-none w-[120px]">
                  <DropdownMenuItem>
                    New
                    <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Page</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuItem>Your account</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex">
          <button className="bg-neutral-100 p-1.5 rounded-md">
            <div className="bg-neutral-50">
              <PlusSquareIcon />
            </div>
          </button>
          <button className="opacity-60 p-1.5 hover:opacity-100">
            <div className="bg-neutral-50">
              <LayoutIcon />
            </div>
          </button>
          <button className="opacity-60 p-1.5 hover:opacity-100">
            <div className="bg-neutral-50">
              <TextIcon />
            </div>
          </button>
          <button className="opacity-60 p-1.5 hover:opacity-100">
            <div className="bg-neutral-50">
              <CmsIcon />
            </div>
          </button>
          <button className="opacity-60 p-1.5 hover:opacity-100">
            <div className="bg-neutral-50">
              <ActionIcon />
            </div>
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <TitlePopover />
        </div>
        <div className="flex gap-2">
          <div>
            <img
              src="https://www.gravatar.com/avatar/20fca46a5228956b8ddb641a5c1e150d"
              alt="ahmadrosid"
              width={25}
              height={25}
              className="rounded-md"
            />
          </div>
          <button className="opacity-60 p-1.5 hover:opacity-100 bg-gray-200 rounded-md">
            <div className="">
              <InternetIcon />
            </div>
          </button>
          <button className="opacity-60 p-1.5 hover:opacity-100 bg-gray-200 rounded-md">
            <div className="">
              <SettingIcon />
            </div>
          </button>
          <button className="opacity-60 p-1.5 hover:opacity-100 bg-gray-200 rounded-md">
            <div className="">
              <PlayIcon />
            </div>
          </button>
          <Button variant={"secondary"} size={"xs"} className="text-xs px-3">
            Invite
          </Button>
          <Button size={"xs"} className="text-xs px-3 shadow-xl">
            Publish
          </Button>
        </div>
      </nav>
      <div className="flex h-[93vh]">
        <aside className="w-full max-w-[260px]">
          <TabsProject />
        </aside>

        <div className="flex-1 bg-neutral-200 flex justify-center items-center">
          <div className="w-[600px] h-[400px] bg-white border-2 border-primary"></div>
        </div>

        <aside className="w-full max-w-[260px]"></aside>
      </div>
    </main>
  );
}
