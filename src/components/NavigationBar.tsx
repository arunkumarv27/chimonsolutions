/* eslint-disable */
"use client";
import React, { useEffect, useRef } from "react";
import "./NavigationBar.css"; // Import the updated CSS above
import Link from "next/link";
import Logo from "@/components/file.svg"; // Adjust the path if needed
import "./NavigationBar.css"; // Import the updated CSS
import Image from "next/image";

export default function NavigationBar() {
  const menuRef = useRef(null);


  return (
    <div className="w-screen bg-white shadow-md relative navigation-bar-wrapper">

      <div className="flex justify-between items-center w-screen px-4 pt-4 pb-0">


        <div className="flex items-center space-x-2">
          <Link href="/" aria-label="home">




          </Link>
          <Link href="/" aria-label="home">
            <span className="font-bold text-xl md:text-2xl text-[#0E1C3D] font-roboto">

              <Image
                src="/ChimonHorizontalpng.png"
                alt="Chimon Solutions Logo"
                width={250}
                height={250}
              />
            </span>
          </Link>
        </div>
        <div className="hidden md:block">

          <ul
            id="mega-menu-header-menu"
            className="mega-menu max-mega-menu mega-menu-horizontal"
            data-event="hover_intent"
            data-effect="fade_up"
            data-effect-speed="200"
            data-effect-mobile="disabled"
            data-effect-speed-mobile="0"
            data-mobile-force-width="false"
            data-second-click="go"
            data-document-click="collapse"
            data-vertical-behaviour="standard"
            data-breakpoint="1199"
            data-unbind="true"
            data-mobile-state="collapse_all"
            data-mobile-direction="vertical"
            data-hover-intent-timeout="300"
            data-hover-intent-interval="100"
          >

            <li className="mega-menu-item">
              <a
                className="mega-menu-link font-bold text-[17px] text-[#0E1C3D] hover:text-[#007bff] transition-colors duration-200"
                href="/"
              >
                Home
              </a>          </li>

            <li className="mega-menu-item mega-menu-item-has-children">

              <a
                className="mega-menu-link font-bold text-[17px] text-[#0E1C3D] hover:text-[#007bff] transition-colors duration-200 cursor-pointer"
              >
                Services
              </a>
              <ul className="mega-sub-menu">
                <li className="mega-menu-item">
                  <h4 className="mega-block-title">Managed IT Services</h4>
                  <ul>
                    <li>
                      <a href="/service/backup-and-disaster-recovery/">
                        Backup and Disaster Recovery
                      </a>
                    </li>
                    <li>
                      <a href="/service/help-desk-support/">
                        Help Desk Support
                      </a>
                    </li>
                    <li>
                      <a href="/service/network-management/">
                        Network Management
                      </a>
                    </li>
                    <li>
                      <a href="/service/security-management/">
                        Security Management
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="mega-menu-item">
                  <h4 className="mega-block-title">Digital Transformation Consulting</h4>
                  <ul>
                    <li>
                      <a href="/service/change-management/">
                        Change Management
                      </a>
                    </li>
                    <li>
                      <a href="/service/digital-strategy-development/">
                        Digital Strategy Development
                      </a>
                    </li>
                    <li>
                      <a href="/service/process-automation/">
                        Process Automation
                      </a>
                    </li>
                    <li>
                      <a href="/service/technology-selection-and-implementation/">
                        Technology Selection and Implementation
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="mega-menu-item">
                  <h4 className="mega-block-title">DevOps as a Service</h4>
                  <ul>
                    <li>
                      <a href="/service/containerization-and-orchestration/">
                        Containerization and Orchestration
                      </a>
                    </li>
                    <li>
                      <a href="/service/continuous-integration-and-continuous-deployment-ci-cd/">
                        Continuous Integration &amp; Continuous Deployment (CI/CD)
                      </a>
                    </li>
                    <li>
                      <a href="/service/infrastructure-as-code-iac/">
                        Infrastructure as Code (IaC)
                      </a>
                    </li>
                    <li>
                      <a href="/service/monitoring-and-logging/">
                        Monitoring and Logging
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="mega-menu-item">
                  <h4 className="mega-block-title">Data Center Management</h4>
                  <ul>
                    <li>
                      <a href="/service/capacity-planning-and-optimization/">
                        Capacity Planning and Optimization
                      </a>
                    </li>
                    <li>
                      <a href="/service/data-center-operations/">
                        Data Center Operations
                      </a>
                    </li>
                    <li>
                      <a href="/service/data-center-security-management/">
                        Data Center Security Management
                      </a>
                    </li>
                    <li>
                      <a href="/service/disaster-recovery-planning/">
                        Disaster Recovery Planning
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="mega-menu-item">
                  <h4 className="mega-block-title">AI and Machine Learning Solutions</h4>
                  <ul>
                    <li>
                      <a href="/service/ai-model-development-and-training/">
                        AI Model Development and Training
                      </a>
                    </li>
                    <li>
                      <a href="/service/computer-vision/">Computer Vision</a>
                    </li>
                    <li>
                      <a href="/service/natural-language-processing-nlp/">
                        Natural Language Processing (NLP)
                      </a>
                    </li>
                    <li>
                      <a href="/service/predictive-analytics/">
                        Predictive Analytics
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="mega-menu-item mega-menu-item-has-children">

              <a
                className="mega-menu-link font-bold text-[17px] text-[#0E1C3D] hover:text-[#007bff] transition-colors duration-200"
                href="/"
              >
                Industries
              </a>
              <ul className="mega-sub-menu">
                <li className="mega-menu-item">
                  <h4 className="mega-block-title">Automotive</h4>
                  <ul>
                    <li>
                      <a href="/industries/automotive/">Embracing Digital Transformation in Automotive Solutions</a>
                    </li>
                  </ul>
                </li>

                <li className="mega-menu-item">
                  <h4 className="mega-block-title">Education</h4>
                  <ul>
                    <li>
                      <a href="/industries/education/">Fostering Learning and Collaboration</a>
                    </li>
                  </ul>
                </li>

                <li className="mega-menu-item">
                  <h4 className="mega-block-title">Finance and Banking</h4>
                  <ul>
                    <li>
                      <a href="/industries/finance-and-banking/">Empowering Financial Institutions with Innovative Solutions</a>
                    </li>
                  </ul>
                </li>

                <li className="mega-menu-item">
                  <h4 className="mega-block-title">Government</h4>
                  <ul>
                    <li>
                      <a href="/industries/government/">Enhancing Service Delivery and Citizen Engagement</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>




            <li className="mega-menu-item mega-menu-item-has-children">

              <a
                className="mega-menu-link font-bold text-[17px] text-[#0E1C3D] hover:text-[#007bff] transition-colors duration-200"
                href="/"
              >
                Partnerships
              </a>
              <ul className="mega-sub-menu">
                <li className="mega-menu-item">
                  <h4 className="mega-block-title">Cloud Providers</h4>
                  <ul>
                    <li>
                      <a href="/partnership/amazon-web-services-aws/">Amazon Web Services (AWS)</a>
                    </li>
                    <li>
                      <a href="/partnership/google-cloud/">Google Cloud</a>
                    </li>
                    <li>
                      <a href="/partnership/microsoft/">Microsoft Azure</a>
                    </li>
                    <li>
                      <a href="/partnership/equinix/">Equinix</a>
                    </li>
                  </ul>
                </li>

                <li className="mega-menu-item">
                  <h4 className="mega-block-title">Technology Partners</h4>
                  <ul>
                    <li>
                      <a href="/partnership/github/">GitHub</a>
                    </li>
                    <li>
                      <a href="/partnership/docker/">Docker</a>
                    </li>
                    <li>
                      <a href="/partnership/jenkins/">Jenkins</a>
                    </li>
                    <li>
                      <a href="/partnership/atlassian/">Atlassian (Jira, Confluence)</a>
                    </li>
                  </ul>
                </li>

                <li className="mega-menu-item">
                  <h4 className="mega-block-title">Consulting & Strategy</h4>
                  <ul>
                    <li>
                      <a href="/partnership/accenture/">Accenture</a>
                    </li>
                    <li>
                      <a href="/partnership/deloitte/">Deloitte</a>
                    </li>
                    <li>
                      <a href="/partnership/mckinsey/">McKinsey & Company</a>
                    </li>
                    <li>
                      <a href="/partnership/pwc/">PwC</a>
                    </li>
                  </ul>
                </li>

                <li className="mega-menu-item">
                  <h4 className="mega-block-title">AI & DevOps</h4>
                  <ul>
                    <li>
                      <a href="/partnership/openai/">OpenAI</a>
                    </li>
                    <li>
                      <a href="/partnership/databricks/">Databricks</a>
                    </li>
                    <li>
                      <a href="/partnership/huggingface/">Hugging Face</a>
                    </li>
                    <li>
                      <a href="/partnership/redhat/">Red Hat (Openshift, Ansible)</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>



            <li className="mega-menu-item">

              <a
                className="mega-menu-link font-bold text-[17px] text-[#0E1C3D] hover:text-[#007bff] transition-colors duration-200"
                href="/aboutUs"
              >
                Chimon Solutions At Work
              </a>
            </li>


            <li className="mega-menu-item">

              <a
                className="mega-menu-link font-bold text-[17px] text-[#0E1C3D] hover:text-[#007bff] transition-colors duration-200"
                href="/careers"
              >
                Careers
              </a>
            </li>


            <li className="mega-menu-item">

              <a
                className="mega-menu-link font-bold text-[17px] text-[#0E1C3D] hover:text-[#007bff] transition-colors duration-200"
                href="/contactus"
              >
                Contact Us</a>
            </li>
          </ul>



        </div>
      </div>
    </div>
  );
}



