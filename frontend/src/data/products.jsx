import bluetoothspeaker from '../assets/frontend_assets/bluetoothspeaker.jpeg';
import cableorg from '../assets/frontend_assets/cableorg.avif';
import chargingpad from '../assets/frontend_assets/chargingpad.avif';
import desklamp from '../assets/frontend_assets/desklamp.jpeg';
import drawingtab from '../assets/frontend_assets/drngtab.jpeg';
import earbuds from '../assets/frontend_assets/earbud.avif';
import ergchair from '../assets/frontend_assets/ergchair.avif';
import exthardDrive from '../assets/frontend_assets/extharddrive.avif';
import fitnesscale from '../assets/frontend_assets/fitnesscale.png';
import gamingmonitor from '../assets/frontend_assets/gamingmonitor.jpg';
import hdmicable from '../assets/frontend_assets/hdmicable.jpeg';
import headphones from '../assets/frontend_assets/headphones.png';
import lappybag from '../assets/frontend_assets/lappybag.avif';
import laptopstand from '../assets/frontend_assets/laptopstand.jpeg';
import mechkeyboard from '../assets/frontend_assets/mechkeyboard.jpeg';
import mousepad from '../assets/frontend_assets/mousepad.jpeg';
import phonetripod from '../assets/frontend_assets/phonetripod.avif';
import powerbank from '../assets/frontend_assets/powerbank.avif';
import prtssd from '../assets/frontend_assets/prtssd.jpg';
import smartledbulb from '../assets/frontend_assets/smartledbulb.jpg';
import smartplug from '../assets/frontend_assets/smartplug.avif';
import smartwatch from '../assets/frontend_assets/smartwatch.png';
import streamingmic from '../assets/frontend_assets/streamingmicrophone.avif';
import tabholder from '../assets/frontend_assets/tabholder.jpeg';
import usbcharger from '../assets/frontend_assets/usbcharger.jpg';
import vrhead from '../assets/frontend_assets/vrhead.png';
import webcamhd from '../assets/frontend_assets/webcamhd.avif';
import wirelessmouse from '../assets/frontend_assets/wirelessmouse.jpg';
import wirelesspresenter from '../assets/frontend_assets/wirelesspresenter.jpg';
import wristkeyboard from '../assets/frontend_assets/wrlskeyboard.jpeg';
const products = [
  {
    name: 'Bluetooth Speaker',
    description: 'Portable waterproof Bluetooth speaker.',
    price: 35.99,
    image: bluetoothspeaker,
    category: 'Audio',
  },
  {
    name: 'Cable Organizer',
    description: 'Magnetic cable clips for desktop organization.',
    price: 9.99,
    image: cableorg,
    category: 'Accessories',
  },
  {
    name: 'Wireless Charging Pad',
    description: '10W fast wireless charger for phones and earbuds.',
    price: 15.99,
    image: chargingpad,
    category: 'Chargers',
  },
  {
    name: 'Desk Lamp',
    description: 'LED desk lamp with touch control and USB port.',
    price: 26.99,
    image: desklamp,
    category: 'Lighting',
  },
  {
    name: 'Drawing Tablet',
    description: 'Graphic drawing tablet with pen and screen.',
    price: 89.99,
    image: drawingtab,
    category: 'Design',
  },
  {
    name: 'Wireless Earbuds',
    description: 'Noise-isolating true wireless earbuds.',
    price: 49.99,
    image: earbuds,
    category: 'Audio',
  },
  {
    name: 'Ergonomic Chair',
    description: 'Adjustable ergonomic office chair with lumbar support.',
    price: 189.99,
    image: ergchair,
    category: 'Furniture',
  },
  {
    name: 'External Hard Drive',
    description: '2TB external hard drive USB 3.0.',
    price: 74.99,
    image: exthardDrive,
    category: 'Storage',
  },
  {
    name: 'Fitness Smart Scale',
    description: 'Bluetooth smart body composition scale.',
    price: 29.99,
    image: fitnesscale,
    category: 'Fitness',
  },
  {
    name: 'Gaming Monitor',
    description: '27-inch 144Hz gaming monitor with 1ms response time.',
    price: 229.99,
    image: gamingmonitor,
    category: 'Displays',
  },
  {
    name: 'HDMI Cable',
    description: '6ft high-speed HDMI 2.0 cable.',
    price: 7.99,
    image: hdmicable,
    category: 'Cables',
  },
  {
    name: 'Bluetooth Headphones',
    description: 'Noise-cancelling over-ear headphones.',
    price: 59.99,
    image: headphones,
    category: 'Audio',
  },
  {
    name: 'Laptop Backpack',
    description: 'Water-resistant backpack with USB charging port.',
    price: 39.99,
    image: lappybag,
    category: 'Bags',
  },
  {
    name: 'Laptop Stand',
    description: 'Adjustable stand for laptops up to 17 inches.',
    price: 29.99,
    image: laptopstand,
    category: 'Accessories',
  },
  {
    name: 'Mechanical Keyboard',
    description: 'Backlit mechanical keyboard with blue switches.',
    price: 49.99,
    image: mechkeyboard,
    category: 'Accessories',
  },
  {
    name: 'Gaming Mouse Pad',
    description: 'Extended RGB gaming mouse pad with lights.',
    price: 18.99,
    image: mousepad,
    category: 'Accessories',
  },
  {
    name: 'Phone Tripod',
    description: 'Adjustable phone tripod with remote shutter.',
    price: 17.99,
    image: phonetripod,
    category: 'Photography',
  },
  {
    name: 'Power Bank',
    description: '10000mAh portable charger with USB-C and USB-A ports.',
    price: 21.99,
    image: powerbank,
    category: 'Chargers',
  },
  {
    name: 'Portable SSD',
    description: '1TB USB 3.2 portable solid-state drive.',
    price: 89.99,
    image: prtssd,
    category: 'Storage',
  },
  {
    name: 'Smart LED Bulb',
    description: 'WiFi smart bulb with app and voice control.',
    price: 14.99,
    image: smartledbulb,
    category: 'Smart Home',
  },
  {
    name: 'Smart Plug',
    description: 'WiFi smart plug compatible with Alexa and Google.',
    price: 12.99,
    image: smartplug,
    category: 'Smart Home',
  },
  {
    name: 'smartwatch',
    description: 'Fitness tracker smartwatch with heart rate monitor.',
    price: 69.99,
    image: smartwatch,
    category: 'Wearables',
  },
  {
    name: 'Streaming Microphone',
    description: 'USB condenser microphone for podcasting and gaming.',
    price: 44.99,
    image: streamingmic,
    category: 'Audio',
  },
  {
    name: 'Tablet Holder',
    description: 'Gooseneck tablet holder for bed or desk.',
    price: 22.99,
    image: tabholder,
    category: 'Accessories',
  },
  {
    name: 'USB-C Charger',
    description: 'Fast 45W USB-C charger for all devices.',
    price: 24.99,
    image: usbcharger,
    category: 'Chargers',
  },
  {
    name: 'VR Headset',
    description: 'Virtual reality headset with controller support.',
    price: 99.99,
    image: vrhead,
    category: 'Gaming',
  },
  {
    name: 'Webcam HD',
    description: '1080p webcam with microphone and tripod.',
    price: 39.99,
    image: webcamhd,
    category: 'Accessories',
  },
  {
    name: 'Wireless Mouse',
    description: 'Comfortable wireless mouse with USB receiver.',
    price: 19.99,
    image: wirelessmouse,
    category: 'Accessories',
  },
  {
    name: 'Wireless Presenter',
    description: 'Slide clicker with laser pointer for presentations.',
    price: 13.99,
    image: wirelesspresenter,
    category: 'Office',
  },
  {
    name: 'Wireless Keyboard',
    description: 'Slim wireless keyboard with silent keys.',
    price: 27.99,
    image: wristkeyboard,
    category: 'Accessories',
  },
];

export default products;
