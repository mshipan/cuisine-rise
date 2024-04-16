import { Tab } from "@headlessui/react";
import { TiThMenu } from "react-icons/ti";
const ItemMenu = () => {
  const tabList = ["Chicken", "Deals", "Burgers", "Rice Bowls", "Pizza"];
  const tabPanelList = [
    "Content 1",
    "Content 2",
    "Content 3",
    "Content 4",
    "Content 5",
  ];
  return (
    <div>
      <Tab.Group>
        <Tab.List
          className={
            "text-white flex items-center gap-3 text-xl border border-black"
          }
        >
          {tabList.map((i) => (
            <Tab
              className={
                "px-6 py-1 bg-red-600 border border-black font-semibold"
              }
              key={i}
            >
              {i}
            </Tab>
          ))}
          <TiThMenu
            size={35}
            className="text-red-600 border border-black font-semibold"
          />
        </Tab.List>
        <Tab.Panels>
          {tabPanelList.map((i) => (
            <Tab.Panel key={i}>{i}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ItemMenu;
