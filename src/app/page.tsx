"use client";

import { ClockIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Separator } from "@/components/ui/separator";
import { TrashIcon } from "@/components/icons/trash-icon";
import { PlusIcon } from "@/components/icons/plus-icon";
import { ListIcon } from "@/components/icons/list-icon";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { FramerIcon } from "@/components/icons/framer-icon";
import { HorizontalOptionIcon } from "@/components/icons/horizontal-option-icon";

export default function Home() {
  const filters = ["Last viewed by me", "Last edited", "Alphabetically"];
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <main className="flex">
      <nav className="w-full max-w-[260px] h-screen bg-neutral-50">
        <div className="p-4 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <img
              src="https://www.gravatar.com/avatar/20fca46a5228956b8ddb641a5c1e150d"
              alt="ahmadrosid"
              width={30}
              height={30}
              className="rounded-md"
            />
            <div className="font-medium text-xs">Ahmad</div>
          </div>
          <div className="pr-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="focus:outline-none">
                  <HorizontalOptionIcon className="text-black w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="bottom" align="start">
                <DropdownMenuItem>Account setting</DropdownMenuItem>
                <DropdownMenuItem>Night mode</DropdownMenuItem>
                <DropdownMenuItem>Desktop app</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Start app tour</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    Import from...
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Figma</DropdownMenuItem>
                    <DropdownMenuItem>Sketch</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuItem>Hide get started</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Homepage</DropdownMenuItem>
                <DropdownMenuItem>Requests</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem>Community</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Signout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="px-4">
          <a
            href="#"
            className="flex gap-4 items-center text-xs text-neutral-500 hover:text-neutral-600 p-1.5 py-2"
          >
            <ClockIcon className="w-4 h-4 " />
            <span>Recents</span>
          </a>
          <a
            href="#"
            className="flex gap-4 items-center text-neutral-500 hover:text-neutral-600 text-xs p-1.5 py-2"
          >
            <TrashIcon className="w-4 h-4" />
            <span>Archive</span>
          </a>
          <a
            href="#"
            className="flex gap-4 items-center  text-neutral-500 hover:text-neutral-600 text-xs p-1.5 py-2"
          >
            <PlusIcon className="w-4 h-4" />
            <span>New Team</span>
          </a>
        </div>
        <div className="p-4">
          <Separator />
        </div>
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 pb-4">
              <div className="bg-primary w-[30px] h-[30px] rounded-lg text-white flex justify-center items-center text-xs font-medium">
                M
              </div>
              <div className="text-sm">My team</div>
            </div>
            <div className="pr-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="focus:outline-none">
                    <HorizontalOptionIcon className="text-black w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="start">
                  <DropdownMenuItem>Team Settings</DropdownMenuItem>
                  <DropdownMenuItem>Team Templates</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Invite Members</DropdownMenuItem>
                  <DropdownMenuItem>Copy Invite Link</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>New folder...</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div>
            <a
              href="#"
              className="flex gap-4 items-center  text-neutral-500 hover:text-neutral-600 text-xs p-2"
            >
              <Squares2X2Icon className="w-4 h-4" />
              <span>All</span>
            </a>
            <a
              href="#"
              className="flex gap-4 items-center  text-neutral-500 hover:text-neutral-600 text-xs p-2"
            >
              <TrashIcon className="w-4 h-4" />
              <span>Archive</span>
            </a>
            <a
              href="#"
              className="flex gap-4 items-center  text-neutral-500 hover:text-neutral-600 text-xs p-2"
            >
              <PlusIcon className="w-4 h-4" />
              <span>New folder...</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="p-16 flex-1">
        <div className="max-w-3xl w-full mx-auto">
          <h2 className="text-xl font-bold">Get Started</h2>
          <div className="grid grid-cols-4 py-8 gap-4">
            <button className="bg-[url(https://app.framerstatic.com/AICard-QSL4HJNC.png)] bg-cover overflow-visible text-sm h-[220px] flex flex-col justify-between rounded-3xl hover:-translate-y-1.5 transition-all duration-300 ease-in-out">
              <div></div>
              <div className="p-5 text-start">
                <p className="font-semibold text-neutral-600">
                  Start the App Tour
                </p>
                <p className="text-neutral-500">Interactive turoial</p>
              </div>
            </button>
            <a
              href="https://www.framer.com/templates/"
              target="_blank"
              className="bg-[url(https://app.framerstatic.com/templatesCard-EVRO22UT.png)] bg-cover overflow-visible text-sm h-[220px] flex flex-col justify-between rounded-3xl hover:-translate-y-1.5 transition-all duration-300 ease-in-out"
            >
              <div></div>
              <div className="p-5 text-start">
                <p className="font-semibold text-neutral-600">
                  Browse Templates
                </p>
                <p className="text-neutral-500">Duplicate in 1 click</p>
              </div>
            </a>
            <a
              href="https://www.framer.com/figma/"
              target="_blank"
              className="bg-[url(https://app.framerstatic.com/figmaCard-YOVXZSVY.png)] bg-cover overflow-visible text-sm h-[220px] flex flex-col justify-between rounded-3xl hover:-translate-y-1.5 transition-all duration-300 ease-in-out"
            >
              <div></div>
              <div className="p-5 text-start">
                <p className="font-semibold text-neutral-600">
                  Paste from Figma
                </p>
                <p className="text-neutral-500">Import your design</p>
              </div>
            </a>
            <a
              href="https://www.framer.com/academy/"
              target="_blank"
              className="bg-[url(https://app.framerstatic.com/learnCard-XAU7AUYY.png)] bg-cover overflow-visible text-sm h-[220px] flex flex-col justify-between rounded-3xl hover:-translate-y-1.5 transition-all duration-300 ease-in-out"
            >
              <div></div>
              <div className="p-5 text-start">
                <p className="font-semibold text-neutral-600">
                  Watch Tutorials
                </p>
                <p className="text-neutral-500">Level up your skills</p>
              </div>
            </a>
          </div>
          <div className="flex justify-between py-8">
            <h2 className="text-xl font-bold">All</h2>
            <div>
              <div className="flex gap-2">
                <div className="p-1.5 bg-neutral-100 rounded-md flex gap-2">
                  <button className="p-1 text-neutral-500">
                    <Squares2X2Icon className="w-4 h-4" />
                  </button>
                  <button className="flex items-center p-1.5 px-2.5 bg-white rounded shadow-md text-neutral-800">
                    <ListIcon />
                  </button>
                </div>
                <Button size="xs" className="px-2 text-xs shadow-md">
                  <PlusIcon className="w-4 text-white mr-1" /> New
                </Button>
              </div>
            </div>
          </div>
          <div className="pb-2">
            <div className="flex justify-between items-center border-b pb-1">
              <div className="flex-1 flex gap-1 items-center text-gray-500">
                <Search className="w-4 h-4" />
                <input
                  placeholder="search"
                  className="w-full px-2 text-sm active:outline-none focus:outline-none"
                />
              </div>
              <div>
                <Popover open={openFilter} onOpenChange={setOpenFilter}>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"link"}
                      size="xs"
                      className="text-neutral-500 text-xs font-normal hover:no-underline"
                    >
                      {activeFilter}
                      <ChevronDownIcon
                        className={
                          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ml-1"
                        }
                      />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="end"
                    className="max-w-[180px] shadow-2xl border-none p-1"
                  >
                    <ul className="text-xs">
                      {filters.map((item, idx) => (
                        <li
                          className="hover:bg-primary hover:text-primary-foreground flex items-center gap-2 pl-2 py-1.5 px-4 rounded-sm cursor-pointer"
                          key={idx}
                          onClick={() => {
                            setActiveFilter(item);
                            setOpenFilter(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "w-4 h-4",
                              item === activeFilter ? "visible" : "invisible"
                            )}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          <div className="py-6">
            <ul>
              <li className="flex items-center gap-4 hover:bg-neutral-100 rounded-md p-2">
                <div className="p-3 bg-white shadow-md rounded inline-flex items-center">
                  <FramerIcon />
                </div>
                <div className="text-sm space-y-1 flex-1">
                  <p className="text-neutral-800">Landing page</p>
                  <p className="text-neutral-500 text-xs">
                    <span>Viewed 2 minutes ago</span>
                    <span>Edited 2 minutes ago</span>
                  </p>
                </div>
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant={"ghost"}
                        size="sm"
                        className="focus:outline-none focus:bg-neutral-200 active:bg-neutral-200 items-center justify-center"
                      >
                        <HorizontalOptionIcon className="text-black w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="bottom"
                      align="end"
                      className="border-none"
                    >
                      <DropdownMenuItem>Open in New Tab</DropdownMenuItem>
                      <DropdownMenuItem>Copy Link</DropdownMenuItem>
                      <DropdownMenuItem>Copy Remix Link</DropdownMenuItem>
                      <DropdownMenuItem>Save as Template</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem>Move</DropdownMenuItem>
                      <DropdownMenuItem>Rename</DropdownMenuItem>
                      <DropdownMenuItem>Upgrade Plan</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Archive</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
