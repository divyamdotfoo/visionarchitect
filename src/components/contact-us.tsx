import Image from "next/image";
import Link from "next/link";
import { RoughWhatsapp } from "./client/scroll-btns";
import { ContactUsMobile } from "./client/contact-us-mobile";
type Props = {
  images: Map<string, { url: string; dataUrl: string }>;
};
export function ContactUs(props: Props) {
  const images = props.images;
  return (
    <section
      className=" h-screen max-w-6xl mx-auto md:pt-20 px-8 snap-start"
      id="contact-us"
    >
      <div className=" hidden md:grid grid-cols-2 items-start justify-items-center w-full flex-wrap">
        <div className=" relative flex">
          <InstaSS
            src={images.get("instagram-profile")?.url!}
            dataUrl={images.get("instagram-profile")?.dataUrl!}
          />
          <ArrowRight />
          <p className=" text-primary italic font-semibold text-2xl -translate-y-24 self-center">
            Follow us <br></br>on Instagram
          </p>
          <RoughWhatsapp />
        </div>
        <div className="flex flex-col gap-4">
          <div className=" relative">
            <ArrowDown />
            <Youtube
              src={images.get("youtube")?.url!}
              dataUrl={images.get("youtube")?.dataUrl!}
            />
          </div>
          <Location />
        </div>
      </div>
      <ContactUsMobile images={images} />
    </section>
  );
}

export function InstaSS({ src, dataUrl }: { src: string; dataUrl: string }) {
  return (
    <Link href={"https://www.instagram.com/vision_architect_"} target="_blank">
      <div className=" md:w-56 md:h-auto overflow-hidden rounded-lg">
        <Image
          src={src}
          placeholder="blur"
          blurDataURL={dataUrl}
          width={384}
          height={640}
          className=" w-full h-full rounded-lg hover:brightness-105 z-0"
          objectFit="cover"
          alt="Instagram profile of vision architect by ujjwal kapoor"
          loading="eager"
          sizes="(max-width: 400px) 100vw, 400px"
        />
      </div>
    </Link>
  );
}

export function Location() {
  return (
    <div className="md:w-96 w-full md:h-56 h-full pb-8 md:pb-0 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.489959369765!2d78.13552007604785!3d29.936582474978227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39094706cf38250d%3A0x4e520b77699b721!2sVISION%20ARCHITECT!5e0!3m2!1sen!2sin!4v1713635743112!5m2!1sen!2sin"
        className=" border-none rounded-lg w-full h-full object-cover m-0 p-0"
        loading="eager"
      ></iframe>
    </div>
  );
}

export function Youtube({ src, dataUrl }: { src: string; dataUrl: string }) {
  return (
    <Link href={"https://youtube.com/@visionarchitect3537"} target="_blank">
      <div className="md:w-96 w-full md:h-56 h-52 rounded-lg cursor-pointer">
        <Image
          src={src}
          placeholder="blur"
          blurDataURL={dataUrl}
          width={384}
          height={640}
          className=" w-full h-full rounded-lg hover:brightness-105 z-0"
          objectFit="cover"
          alt="Youtube channel vision architect"
          loading="lazy"
          sizes="(max-width: 400px) 100vw, 400px"
        />
      </div>
    </Link>
  );
}

function ArrowRight() {
  return (
    <svg
      width="100"
      height="310"
      viewBox="0 0 330 310"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
    >
      <g clipPath="url(#clip0_3_252)">
        <path
          d="M272.257 130.168C264.17 127.647 257.675 125.988 251.361 123.893C247.697 122.584 243.594 121.094 245.57 114.339C258.761 116.922 271.737 118.29 284.184 122.918C289.462 124.791 290.588 128.018 289.293 133.622C288.848 135.689 287.964 137.575 287.241 139.323C282.962 148.913 278.684 158.503 274.106 168.072C272.68 171.269 270.795 174.583 266.554 172.934C262.75 171.465 262.104 167.822 262.953 164.285C263.983 160.311 265.59 156.677 267.058 152.884C268.143 150.262 269.388 147.503 269.32 144.2C268.36 145.031 267.4 145.863 266.44 146.694C255.722 155.979 249.659 156.748 236.878 150.448C226.727 145.232 218.035 138.472 211.327 129.153C209.679 126.938 208.031 124.723 206.523 122.667C199.473 113.924 193.611 113.959 187.399 123.262C184.214 127.983 182.022 133.524 179.413 138.586C171.866 154.09 162.581 157.93 146.171 151.971C133.864 147.503 122.919 140.732 113.659 131.383C110.857 128.487 107.916 125.431 104.773 123.11C99.4817 119.288 95.9698 120.088 93.5974 126.066C90.9051 132.321 89.388 138.959 87.5718 145.575C86.2011 150.125 85.5674 154.877 83.8977 159.405C80.3982 168.601 73.9369 175.038 63.6658 175.81C55.9677 176.315 48.0124 176.201 40.2381 175.651C35.1548 175.291 30.517 172.864 28.606 165.834C31.1581 165.865 33.2511 166.013 35.5042 166.022C43.5985 166.296 51.6928 166.569 59.829 166.245C67.6661 165.901 72.0688 160.966 73.9268 153.753C75.423 147.413 76.3212 141.032 77.9565 134.852C79.5499 129.269 81.0043 123.526 83.752 118.624C89.4701 107.787 100.465 105.267 110.47 112.571C115.045 115.892 119.258 120.088 123.173 124.262C131.161 132.472 140.833 138.103 151.389 141.848C160.192 144.87 163.606 143.313 167.78 135.214C171.251 128.565 174.145 121.575 178.472 115.585C181.157 111.578 185.594 108.295 190.107 106.066C197.896 102.121 205.427 104.003 211.288 110.414C214.347 113.928 217.386 117.74 219.805 121.809C225.617 131.064 234.37 136.93 243.646 141.783C248.145 144.05 252.331 144.347 256.65 140.605C260.969 136.864 265.963 134.219 272.257 130.168Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_252">
          <rect
            width="274"
            height="246"
            fill="white"
            transform="translate(0.833374 71.6494) rotate(-15)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function ArrowDown() {
  return (
    <div className=" absolute flex z-50 flex-col items-end gap-2 -bottom-8 -left-44">
      <svg
        width="50"
        height="50"
        viewBox="0 0 122 136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=""
      >
        <g clipPath="url(#clip0_3_220)">
          <path
            d="M24.7219 107.666C48.2285 92.6289 71.9469 77.5917 95.4536 62.5546C95.2418 61.9192 94.8183 61.0721 94.6065 60.4367C84.865 62.131 74.9117 63.8254 65.1702 65.3079C59.4524 66.1551 53.7346 66.7904 48.0168 66.5786C36.1575 66.155 31.9221 57.8952 38.0635 47.7293C40.1812 44.3406 42.7225 40.7402 45.6873 38.1987C60.2995 25.9148 75.1235 14.0546 89.7357 1.98249C90.7946 1.13533 92.0652 0.288181 93.3359 0.0763904C94.3947 -0.1354 96.3007 0.0763774 96.936 0.92354C97.7831 2.19428 98.4184 4.52399 97.5713 5.37115C95.2418 8.33622 92.7005 10.8777 89.9475 13.4192C78.5118 23.3734 66.6526 33.3275 55.217 43.4935C51.8286 46.4585 49.0756 50.4826 44.6284 55.7773C50.3462 55.7773 53.7346 56.2009 57.1229 55.7773C72.1587 53.2359 87.1945 50.2707 102.23 47.7293C105.619 47.0939 109.007 46.2467 112.395 46.8821C115.36 47.3057 119.172 48.7882 120.866 51.1179C123.407 54.5066 121.29 58.3188 118.325 61.0721C115.572 63.6136 112.819 66.1551 109.642 68.273C90.7946 80.5568 72.1587 92.6289 53.311 104.913C50.3462 106.819 47.3814 108.937 42.5107 112.114C55.217 112.325 64.7467 105.125 77.6648 109.36C74.2764 112.537 72.3705 114.867 70.041 116.138C51.4051 125.245 31.4986 131.387 11.1685 135.622C2.69764 137.528 -1.96134 132.022 0.791693 123.55C2.06232 119.738 3.7565 115.926 6.29775 112.749C13.0744 103.854 20.0629 95.1704 27.2631 86.487C28.5338 85.0044 31.4986 83.7337 32.981 84.1573C36.1575 85.428 35.734 88.6048 34.2516 91.1463C31.075 96.6529 27.4749 102.159 24.0866 107.454C24.0866 107.031 24.5101 107.454 24.7219 107.666Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_3_220">
            <rect width="122" height="136" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <p className="text-primary font-semibold italic text-xl">
        Checkout our <br /> youtube channel
      </p>
    </div>
  );
}
