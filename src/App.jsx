import PriceTag from './PriceTag';
import { useEffect, useRef, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  ShoppingBag,
} from "lucide-react";
import "./App.css";
import "./Shop.css";
import CarEditorial from "./CarEditorial";
import { MoneyFrame, Idea } from "./BrandPages";
import Contact from "./Contact";

const PRODUCTS = [
  { id: "car", name: "Car Frame", price: 499, image: "/images/car-frame.jpg" },
  { id: "money", name: "Money Frame", price: 199, image: "/images/money-frame.jpg" },
];
const formatAED = (value) => `AED ${value.toLocaleString("en-AE")}`;

function App() {
  const [panel, setPanel] = useState(null);
  const [topic, setTopic] = useState("Contact");
  function openContact(subject) { setTopic(subject); setPanel("contact"); }
  function addToBag(id) { changeQuantity(id, 1); setPanel("cart"); }
  const [cart, setCart] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("thewantend-cart") || "{}");
      return Object.fromEntries(PRODUCTS.map(({ id }) => [id,
        Number.isInteger(saved?.[id]) ? Math.max(0, Math.min(99, saved[id])) : 0,
      ]));
    } catch { return {}; }
  });
  const dialogRef = useRef(null);
  const isPanelOpen = panel !== null;
  const count = PRODUCTS.reduce((sum, item) => sum + (cart[item.id] || 0), 0);
  const subtotal = PRODUCTS.reduce((sum, item) => sum + item.price * (cart[item.id] || 0), 0);
  const selected = PRODUCTS.find((item) => panel === item.id);

  useEffect(() => {
    try { localStorage.setItem("thewantend-cart", JSON.stringify(cart)); } catch {}
  }, [cart]);

  useEffect(() => {
    if (!isPanelOpen) return;
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isPanelOpen]);

  function changeQuantity(id, delta) {
    setCart((previous) => ({
      ...previous,
      [id]: Math.max(0, Math.min(99, (previous[id] || 0) + delta)),
    }));
  }

  function goTo(id) {
    setPanel(null);
    window.history.pushState(null, "", `#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  function navigation() {
    return <nav aria-label="Main navigation">
      <a href="#frames">SHOP</a>
      <a className="nav-action" href="#idea">ABOUT</a>
      <button className="nav-action" onClick={() => openContact("Contact")}>CONTACT</button>
    </nav>;
  }

  function controls() {
    return <>
      <button className="shop-icon" aria-label={`Open bag, ${count} items`} onClick={() => setPanel("cart")}>
        <ShoppingBag size={21} strokeWidth={1.45} />
        {count > 0 && <span className="bag-count">{count}</span>}
      </button>
      <button className="shop-icon" aria-label="Open menu" onClick={() => setPanel("menu")}>
        <Menu size={24} strokeWidth={1.45} />
      </button>
    </>;
  }

  return (
    <MotionConfig reducedMotion="user"><main className="site">

      {/* ================= HERO / PAGE 01 ================= */}

      <section id="home" className="hero">
        <picture>
          <source media="(max-width: 700px)" srcSet="/images/hero-mobile.jpg" />
        <motion.img
          src="/images/hero.jpg"
          className="hero-image"
          alt="THEWANTEND Car Frame"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        </picture>
        <div className="hero-shade" />

        <header className="hero-nav">
          <a className="hero-logo" href="#home" aria-label="THEWANTEND home">
            <svg className="hero-mark" viewBox="0 0 30 40" fill="none" aria-hidden="true">
              <path d="M2 3V37L28 3V37L20 27M2 3L11 15" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter" />
            </svg>
            <span>THEWANTEND<sup>®</sup></span>
          </a>

          {navigation()}

          <div className="hero-icons">{controls()}</div>
        </header>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="hero-eyebrow">MORE THAN OBJECTS.</p>

          <h1>
            <span className="hero-title-intro">A PART OF</span>
            <span className="hero-title-story"><em>YOUR</em> STORY.</span>
          </h1>

          <span className="hero-line" />

          <p className="hero-sub">
            FRAMES FOR WHAT DRIVES YOU.
          </p>

          <motion.a
            href="#frames"
            onClick={(event) => { event.preventDefault(); goTo("frames"); }}
            className="hero-button"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>EXPLORE</span>
            <span className="hero-button-arrow"><ArrowRight size={21} strokeWidth={1.5} /></span>
          </motion.a>
        </motion.div>

        <span className="hero-location">DUBAI, UAE</span>
        <span className="hero-counter">01 / 04</span>
      </section>


      {/* ================= FEATURED / PAGE 02 ================= */}

      <section id="frames" className="featured">

        <div className="featured-bg-shape featured-bg-one" />
        <div className="featured-bg-shape featured-bg-two" />

        {/* REAL STUDIO PROPS */}

        <img
  src="/images/studio-left.png"
  className="studio-left"
  alt=""
  aria-hidden="true"
/>
<img
  src="/images/studio-right.png"
  className="studio-right"
  alt=""
  aria-hidden="true"
/>

        {/* NAV */}

        <header className="featured-nav">
          <div className="featured-logo">
            THEWANTEND
          </div>

          {navigation()}

          <div className="featured-icons">{controls()}</div>
        </header>


        {/* HEADING */}

        <motion.div
          className="featured-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="section-counter">
            <span>02 / 04</span>
            <i />
          </div>

          <p className="featured-label">
            FEATURED FRAMES
          </p>

          <h2>
            Pick Your
            <br />
            Story.
          </h2>
        </motion.div>

        <div className="featured-note">
          MORE THAN
          <br />
          OBJECTS.
        </div>


        {/* PRODUCTS */}

        <div className="product-stage">

          {/* CAR FRAME */}

          <motion.a
            href="#car-product"
            onClick={(event) => { event.preventDefault(); goTo("car-product"); }}
            className="product car-product"
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.div
              className="product-photo car-photo"
              whileHover={{
                y: -10,
                rotateY: -1.8,
                rotateX: 1.2,
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <img
                src="/images/car-frame.jpg"
                alt="THEWANTEND Car Frame"
              />
            </motion.div>

            <div className="product-meta">
              <div>
                <h3>CAR FRAME</h3>
                <PriceTag amount={499} compact />
              </div>

              <div className="round-arrow">
                <ArrowRight size={23} strokeWidth={1.35} />
              </div>
            </div>
          </motion.a>


          {/* MONEY FRAME */}

          <motion.a
            href="#money-product"
            onClick={(event) => { event.preventDefault(); goTo("money-product"); }}
            className="product money-product"
            initial={{ opacity: 0, y: 65 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.95,
              delay: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.div
              className="product-photo money-photo"
              whileHover={{
                y: -10,
                rotateY: 1.8,
                rotateX: 1.2,
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <img
                src="/images/money-frame.jpg"
                alt="THEWANTEND Money Frame"
              />
            </motion.div>

            <div className="product-meta">
              <div>
                <h3>MONEY FRAME</h3>
                <PriceTag amount={199} compact />
              </div>

              <div className="round-arrow">
                <ArrowRight size={23} strokeWidth={1.35} />
              </div>
            </div>
          </motion.a>

        </div>


        {/* BOTTOM */}

        <div className="featured-bottom">

          <p>
            DIFFERENT FRAMES.
            <br />
            SAME MINDSET.
          </p>

          <div className="bottom-navigation">
            <span>02 / 04</span>
            <i />

            <button className="shop-icon" aria-label="Back to hero" onClick={() => goTo("home")}><ChevronLeft size={21} strokeWidth={1.4} /></button>

            <button className="shop-icon" aria-label="Browse frame details" onClick={() => goTo("car-product")}><ChevronRight size={21} strokeWidth={1.4} /></button>
          </div>

        </div>

      </section>

      {/* ================= CAR PRODUCT / PAGE 03 ================= */}
      <CarEditorial controls={controls} onOrder={() => openContact("Car Frame")} onAdd={() => addToBag("car")} onBack={() => goTo("frames")} />
      <MoneyFrame onOrder={() => openContact("Money Frame")} onAdd={() => addToBag("money")} />
      <Idea onContact={openContact} />

      <dialog ref={dialogRef} className="shop-dialog" aria-labelledby="shop-panel-title"
        onCancel={() => setPanel(null)}
        onClick={(event) => { if (event.target === event.currentTarget) setPanel(null); }}>
        <div className="shop-panel">
          <div className="shop-panel-header">
            <h2 id="shop-panel-title">{selected?.name || ({ menu: "Menu", cart: "Your bag", about: "About THEWANTEND", contact: topic }[panel] || "THEWANTEND")}</h2>
            <button autoFocus className="shop-close" onClick={() => setPanel(null)} aria-label="Close dialog">×</button>
          </div>

          {panel === "menu" && <div className="shop-menu">
            <button onClick={() => goTo("home")}>Home <ArrowRight /></button>
            <button onClick={() => goTo("frames")}>Shop frames <ArrowRight /></button>
            <button onClick={() => goTo("car-product")}>Car Frame <ArrowRight /></button>
            <button onClick={() => goTo("money-product")}>Money Frame <ArrowRight /></button>
            <button onClick={() => goTo("how-it-works")}>How it works <ArrowRight /></button>
            <button onClick={() => goTo("idea")}>The idea <ArrowRight /></button>
            <button onClick={() => openContact("Contact")}>Contact <ArrowRight /></button>
            <button onClick={() => setPanel("cart")}>Your bag ({count}) <ShoppingBag /></button>
          </div>}

          {selected && <div className="shop-details">
            <img src={selected.image} alt={`THEWANTEND ${selected.name}`} />
            <p className="shop-price">{formatAED(selected.price)}</p>
            <p>MORE THAN OBJECTS. FRAMES FOR WHAT DRIVES YOU.</p>
            <p className="shop-muted">Confirm your design and delivery details with us before ordering.</p>
            <button className="shop-primary" disabled={(cart[selected.id] || 0) >= 99}
              onClick={() => { changeQuantity(selected.id, 1); setPanel("cart"); }}>Add to bag <ShoppingBag size={18} /></button>
            <button className="shop-secondary" onClick={() => setPanel(selected.id === "car" ? "money" : "car")}>View {selected.id === "car" ? "Money" : "Car"} Frame <ArrowRight size={18} /></button>
          </div>}

          {panel === "cart" && (count === 0 ? <div className="shop-empty">
            <ShoppingBag size={36} /><p>Your bag is empty.</p>
            <button className="shop-primary" onClick={() => goTo("frames")}>Explore frames <ArrowRight size={18} /></button>
          </div> : <div>
            <div className="shop-cart-items">{PRODUCTS.filter((item) => cart[item.id] > 0).map((item) => <div className="shop-cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div><h3>{item.name}</h3><p>{formatAED(item.price)} each</p>
                <div className="shop-quantity">
                  <button aria-label={`Decrease ${item.name} quantity`} onClick={() => changeQuantity(item.id, -1)}>−</button>
                  <span aria-live="polite">{cart[item.id]}</span>
                  <button disabled={cart[item.id] >= 99} aria-label={`Increase ${item.name} quantity`} onClick={() => changeQuantity(item.id, 1)}>+</button>
                </div>
                <button className="shop-remove" onClick={() => setCart((previous) => ({ ...previous, [item.id]: 0 }))}>Remove {item.name}</button>
              </div>
            </div>)}</div>
            <div className="shop-total"><span>Estimated subtotal</span><strong>{formatAED(subtotal)}</strong></div>
            <p className="shop-muted">Delivery is excluded; any additional requests are confirmed before ordering. Online checkout is not available yet. No order has been placed.</p>
            <button className="shop-primary" onClick={() => openContact("Your bag")}>ENQUIRE ABOUT YOUR BAG <ArrowRight size={18} /></button>
            <button className="shop-secondary" onClick={() => goTo("frames")}>Continue browsing <ArrowRight size={18} /></button>
          </div>)}

          {panel === "about" && <div className="shop-copy"><p>MORE THAN OBJECTS.</p><p>Car Frame and Money Frame: different frames, same mindset.</p><button className="shop-primary" onClick={() => goTo("frames")}>Explore frames <ArrowRight size={18} /></button></div>}
          {panel === "contact" && <Contact key={topic} topic={topic} items={topic === "Your bag" ? PRODUCTS.filter(item => cart[item.id] > 0).map(item => `${item.name} × ${cart[item.id]} — ${formatAED(item.price * cart[item.id])}`).join("\n") : ''} />}
        </div>
      </dialog>
    </main></MotionConfig>
  );
}

export default App;
