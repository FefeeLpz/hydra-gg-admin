"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"


const ReedemKey = () => {
    return (
      <section className="flex flex-col overflow w-full bg-neutral-900 p-7 rounded-2xl border border-neutral-800">
          <h2 className="text-white font-normal text-2xl">
              Manage Keys
          </h2>
          <h2 className="text-white font-normal text-xl mt-4">
            Create Key
          </h2>
          <div className="mt-4 mb-4 flex ">
            <Select>
              <SelectTrigger className="w-[180px] hover:bg-white hover:text-neutral-950 transition duration-500">
                <SelectValue placeholder="Key Duration" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-950">
                <SelectItem value="light">7D - 20R$</SelectItem>
                <SelectItem value="dark">30D - 40R$</SelectItem>
                <SelectItem value="system">90D - 85R$</SelectItem>
              </SelectContent>
            </Select>
            <Button className="hover:bg-white hover:text-neutral-950 transition duration-500 ml-4 rounded-xl" variant="outline">Create Key</Button>
          </div>
      </section>
    );
  }
  
  export default ReedemKey;