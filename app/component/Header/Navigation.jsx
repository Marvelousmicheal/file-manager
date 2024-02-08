"use client";
import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components = [
  {
    title: "OrganizeX",

    description:
      "Ideal for most use cases, OrganizeX provides a comprehensive set of components to streamline your folder management. Start your organized journey with ease.",
  },
  {
    title: "Simplicity",

    description:
      "A template offering a minimalistic collection of components. Choose Simplicity if you prefer to craft your unique folder management experience with a simplified foundation.",
  },
  {
    title: "Efficiency Pro",

    description:
      "An advanced template designed for efficiency, Efficiency Pro boasts an extensive range of components and features. Opt for this template to create a sophisticated and feature-rich folder management UI.",
  },
  {
    title: "Marketing Focus",

    description:
      "Tailored for marketing or landing pages, Marketing Focus is your go-to choice for creating visually appealing and effective promotional content.",
  },
  {
    title: "Dashboard Pro",

    description:
      "Featuring a layered template with sidebar navigation, Dashboard Pro is perfect for building a robust dashboard or admin panel for your folder management system.",
  },
  {
    title: "Content Hub",

    description:
      "Discover Mint, a stylish template crafted for building a blog or a content-heavy website within your folder management environment.",
  },
];

function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList  className="hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="flex items-center">
                      <Link href="/">
                        <div className="text-lg uppercase font-bold ">
                          Filey
                        </div>
                      </Link>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Effortlessly integrate our elegantly crafted folder
                      management components into your applications.
                      User-friendly. Adaptable. Open for collaboration.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Streamlined components crafted for your folder management
                experience, leveraging the power of Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                Effortlessly set up dependencies and organize your application
                structure with our intuitive installation guide.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Tailor your folder views with customizable styles for headings,
                paragraphs, lists, and more.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(function ListItem(
  { className, title, children, ...props },
  ref
) {
  return React.createElement(
    "li",
    null,
    React.createElement(
      NavigationMenuLink,
      { asChild: true },
      React.createElement(
        "a",
        {
          ref: ref,
          className: cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          ),
          ...props,
        },
        React.createElement(
          "div",
          { className: "text-sm font-medium leading-none" },
          title
        ),
        React.createElement(
          "p",
          {
            className:
              "line-clamp-2 text-sm leading-snug text-muted-foreground",
          },
          children
        )
      )
    )
  );
});
ListItem.displayName = "ListItem";

export default NavigationMenuDemo;
