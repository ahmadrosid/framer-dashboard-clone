import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function TitlePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">Untitled</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 border-none shadow-lg">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Name</Label>
              <Input
                id="name"
                defaultValue="Untitled"
                className="col-span-2 h-8 bg-neutral-100"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Folder</Label>
              <Input
                id="maxWidth"
                defaultValue="My Team / All"
                className="col-span-2 h-8 bg-neutral-100"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
