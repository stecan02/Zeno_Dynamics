'use client';

import Link from 'next/link';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">

            <div className="container footer-content">

                <div className="footer-image">
                    <img
                        src="/Zeno_logo.png"
                        alt="Zeno Dynamics Logo"
                        className="footer-logo-img"
                    />
                </div>

                <div className="footer-grid">

                    <div className="footer-column">
                        <p className="footer-grid-title">Azienda</p>

                        <ul className="footer-list">
                            <li>
                                <Link href="/about" className="footer-link">
                                    Chi siamo
                                </Link>
                            </li>

                            <li>
                                <Link href="/services" className="footer-link">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link href="/careers" className="footer-link">
                                    Contatti
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <p className="footer-grid-title">Legal</p>

                        <ul className="footer-list">
                            <li>
                                <Link href="/privacy" className="footer-link">
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link href="/terms" className="footer-link">
                                    Terms & Conditions
                                </Link>
                            </li>

                            <li>
                                <Link href="/cookies" className="footer-link">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div className="footer-column">
                        <p className="footer-grid-title">Servizi</p>

                        <ul className="footer-list">
                            <li>
                                <Link href="/services/consulting" className="footer-link">
                                    Zeno One
                                </Link>
                            </li>

                            <li>
                                <Link href="/services/implementation" className="footer-link">
                                    W-Bag
                                </Link>
                            </li>

                            <li>
                                <Link href="/services/support" className="footer-link">
                                    Kore
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <p className="footer-grid-title">Attivazione</p>

                        <ul className="footer-list">
                            <li>
                                <Link href="/contact" className="footer-link">
                                    Noleggio
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="footer-link">
                                    Leasing 
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="footer-link">
                                    Acquisto diretto
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="container footer-content">
                <div className="footer-grid-bis">
                    <div className="footer-column">
                        <p className="footer-grid-title">Sede legale</p>
                        <ul className="footer-list">
                        <li>
                            <Link href="/contact" className="footer-link">
                                    Via Guareschi 2, 42019 Scandiano (RE) 
                                </Link>
                        </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <p className="footer-grid-title">Ragione Sociale</p>
                        <ul className="footer-list">
                            <li>
                                <Link href="/contact" className="footer-link">
                                    Zeno Dynamics S.R.L.
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <p className="footer-grid-title">P.IVA</p>
                        <ul className="footer-list">
                            <li>
                                <Link href="/contact" className="footer-link">
                                03133180350
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom">
              <p className="copyright">
                © 2026 Zeno Dynamics Srl. Tutti i diritti riservati.
              </p>
            </div>
        </footer>
    );
}