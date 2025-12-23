import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-10">

      {/* Full Width Grid */}
      <Grid
        container
        spacing={4}
        justifyContent="space-between"   // ← evenly spreads columns
        sx={{ width: "100%", margin: "0 auto" }}
      >

        {/* Brand Column */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="font-semibold mb-3">
            ShopMate
          </Typography>

          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted online shopping partner.
          </p>

          <div className="flex gap-4 mt-3 text-xl">
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaTwitter className="cursor-pointer hover:text-sky-400" />
            <FaYoutube className="cursor-pointer hover:text-red-500" />
          </div>
        </Grid>

        {/* Company Column */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="mb-3 font-semibold">
            Company
          </Typography>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white">About Us</li>
            <li className="hover:text-white">Blog</li>
            <li className="hover:text-white">Jobs</li>
            <li className="hover:text-white">Press</li>
            <li className="hover:text-white">Parters</li>
          </ul>
        </Grid>

        {/* Support Column */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="mb-3 font-semibold">
            Solution
          </Typography>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white">Marketing</li>
            <li className="hover:text-white">Analytics</li>
            <li className="hover:text-white">Commerce</li>
            <li className="hover:text-white">Insight</li>
            <li className="hover:text-white">Support</li>
          </ul>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="mb-3 font-semibold">
            Documentation
          </Typography>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white">Guides</li>
            <li className="hover:text-white">API Status</li>
          </ul>
        </Grid>

        {/* Legal Column */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="mb-3 font-semibold">
            Legal
          </Typography>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white">Claim</li>
            <li className="hover:text-white">Privacy </li>
            <li className="hover:text-white">Terms</li>
          </ul>
        </Grid>

      </Grid>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} ShopMate — All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;
