import "./LpEvents.css";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function EventsCard() {
  return (
    <div className="max-w-[80%] mx-auto gap-8 grid grid-cols-12 sm:grid-cols-12 justify-center  mb-12  ">
      <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[350px] ">
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-5.jpeg"
        />
        <CardFooter className="bg-black/40 absolute flex flex-col justify-evenly bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="btn flex justify-evenly">
            <Button
              radius="full"
              size="sm"
              className="bg-black/40 flex justify-evenly bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100"
            >
              <i
                className="fa-regular fa-calendar-days fa-xl"
                style={{ color: "#cef23f" }}
              ></i>
              <p style={{ fontSize: "10px" }}>Oct 10, 2024</p>
            </Button>
            <Button
              radius="full"
              size="sm"
              className="bg-black/40 flex justify-evenly bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100"
            >
              <i
                className="fa-solid fa-location-dot fa-xl"
                style={{ color: "#cef23f" }}
              ></i>
              <p style={{ fontSize: "10px" }}>Serenity, Mumbai</p>
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[350px]">
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-5.jpeg"
        />
        <CardFooter className="bg-black/40 absolute flex justify-evenly bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <Button
            radius="full"
            size="sm"
            className="bg-black/40 flex justify-evenly bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100"
          >
            <i
              className="fa-regular fa-calendar-days fa-xl"
              style={{ color: "#cef23f" }}
            ></i>
            <p style={{ fontSize: "10px" }}>Oct 10, 2024</p>
          </Button>
          <Button
            radius="full"
            size="sm"
            className="bg-black/40 flex justify-evenly bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100"
          >
            <i
              className="fa-solid fa-location-dot fa-xl"
              style={{ color: "#cef23f" }}
            ></i>
            <p style={{ fontSize: "10px" }}>Serenity, Mumbai</p>
          </Button>
        </CardFooter>
      </Card>
      <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[350px]">
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-5.jpeg"
        />
        <CardFooter className="bg-black/40 absolute flex justify-evenly bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <Button
            radius="full"
            size="sm"
            className="bg-black/40 flex justify-evenly bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100"
          >
            <i
              className="fa-regular fa-calendar-days fa-xl"
              style={{ color: "#cef23f" }}
            ></i>
            <p style={{ fontSize: "10px" }}>Oct 10, 2024</p>
          </Button>
          <Button
            radius="full"
            size="sm"
            className="bg-black/40 flex justify-evenly bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100"
          >
            <i
              className="fa-solid fa-location-dot fa-xl"
              style={{ color: "#cef23f" }}
            ></i>
            <p style={{ fontSize: "10px" }}>Serenity, Mumbai</p>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
