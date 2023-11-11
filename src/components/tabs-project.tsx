import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "./ui/separator";
import { PlusIcon } from "./icons/plus-icon";
import { HomeIcon } from "./icons/home-icon";

export function TabsProject() {
  return (
    <Tabs defaultValue="pages" className="w-full p-2">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="pages">Pages</TabsTrigger>
        <TabsTrigger value="layers">Layers</TabsTrigger>
        <TabsTrigger value="assets">Assets</TabsTrigger>
      </TabsList>
      <TabsContent value="pages">
        <div className="p-2">
          <Separator />
          <div className="flex justify-between items-center pt-3 text-sm">
            <div>Web</div>
            <div>
              <PlusIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="px-2 py-2">
          <div className="text-xs flex items-center gap-2 px-2 rounded-md bg-neutral-100 p-2">
            <HomeIcon className="text-neutral-500 w-4 h-4" /> Home
          </div>
        </div>
        <div className="p-2">
          <Separator />
          <div className="flex justify-between items-center pt-3 text-sm">
            <div>CMS</div>
            <div>
              <PlusIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="p-2">
          <Separator />
          <div className="flex justify-between items-center pt-3 text-sm">
            <div>Canvas</div>
            <div>
              <PlusIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="layers">
        <div className="p-2">
          <Separator />
        </div>
        <div className="px-2 py-2">
          <div className="text-xs flex items-center gap-2 px-2 rounded-md bg-neutral-100 p-2">
            <HomeIcon className="text-neutral-500 w-4 h-4" /> Home
          </div>
        </div>
      </TabsContent>
      <TabsContent value="assets">
        <div className="p-2">
          <Separator />
          <div className="flex justify-between items-center pt-3 text-sm">
            <div>Component</div>
            <div>
              <PlusIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="p-2">
          <Separator />
          <div className="flex justify-between items-center pt-3 text-sm">
            <div>Styles</div>
            <div>
              <PlusIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="p-2">
          <Separator />
          <div className="flex justify-between items-center pt-3 text-sm">
            <div>Code</div>
            <div>
              <PlusIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
