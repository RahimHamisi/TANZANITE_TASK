<template>
  <v-footer color="#1A2A44" dark class="footer">
    <v-container class="py-8 px-4">
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="3" class="footer-col">
          <h3 class="footer-title mb-4">WASILIANA NASI</h3>
          <p class="footer-text mb-2">
        
          </p>
          <p class="footer-text mb-2">
            Barua pepe: info@tanzaniteskills.ac.tz<br>Simu: +255 749 722 722
          </p>
        </v-col>
        <v-col cols="12" sm="6" md="3" class="footer-col">
          <h3 class="footer-title mb-4">FIKIA TIMU YETU</h3>
          <p class="footer-text mb-2">
            Fikia timu yetu ya msada wakati wowote - tunapatikana saa 24 kila siku.<br>
            <a href="tel:+255 749 722 722" class="footer-link">+255 749 722 722</a><br>
            <a href="tel:+255 749 722 722" class="footer-link">+255 749 722 722</a>
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-row no-gutters class="footer-bottom">
      <v-col cols="12" class="d-flex flex-column align-center">
        <div class="footer-links mb-2">
          <a href="#" class="footer-link mr-4">Wasiliana Nasi</a>
        </div>
        <span class="copyright">
          © 2022 -{{ new Date().getFullYear() }}. Haki zote zimehifadhiwa.
        </span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(180deg, #1a3c3c 0%, #2a4d4d 70%, #344e4e 100%);
  font-family: 'Roboto', sans-serif;
  position: relative;
  overflow: hidden;
}

.footer-col {
  padding: 0 1rem;
}

.footer-title {
  font-weight: 700;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-text {
  font-size: clamp(0.85rem, 2vw, 1rem);
  color: #ddd;
  line-height: 1.6;
}

.footer-link {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-link:hover,
.footer-link:focus {
  color: #ffca28;
  text-decoration: underline;
  outline: none;
}

.social-links {
  display: flex;
  align-items: center;
}

.social-icon .v-icon {
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-icon:hover .v-icon,
.social-icon:focus .v-icon {
  color: #ffca28;
  transform: scale(1.2);
}

.footer-bottom {
  background-color: #1a3c3c;
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.copyright {
  font-size: clamp(0.75rem, 1.5vw, 0.9rem);
  color: #bbb;
  text-align: center;
  user-select: none;
}

@media (max-width: 960px) {
  .footer-col {
    padding: 0 0.5rem;
  }

  .footer-title {
    font-size: 1.3rem;
  }

  .footer-text {
    font-size: 0.9rem;
  }

  .social-links {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .footer-col {
    padding: 0;
    text-align: center;
  }

  .footer-title {
    font-size: 1.1rem;
  }

  .footer-text {
    font-size: 0.8rem;
  }

  .social-links {
    justify-content: center;
    gap: 0.5rem;
  }

  .footer-links {
    flex-direction: column;
    gap: 0.5rem;
  }

  .copyright {
    font-size: 0.7rem;
  }
}
</style>