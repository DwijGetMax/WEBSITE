import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Modal from "react-modal";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/AboutUs/About.jsx";
import Contact from "./components/ContactUs/Contact.jsx";
import Offers from "./components/Offers/Offers.jsx";
import Partners from "./components/Partners/Partner.jsx";
import Services from "./components/OurServices/Services.jsx";
import WhyGetMax from "./components/WHyGetMax/WhyGetMax.jsx";
import SuccessStory from "./components/SuccessStory/Success.jsx";
import Login from "./components/Login/Login.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import { LanguageProvider } from "./LanguageProvider.jsx";
import CountryAndLanguage from "./components/Header/CountyAndLanguage.jsx";
import DropdownMenu from "./components/Header/DropdownMenu.jsx"; // Import DropdownMenu component
import ErrorBoundary from "./ErrorBoundary.jsx"; // Import ErrorBoundary component
import OnedrivePage from "./components/Header/MicrosoftCloudSolutions/Microsoft-365/OnedrivePage.jsx";

import Copilot from "./components/Header/MicrosoftCloudSolutions/Microsoft-365/Copilot.jsx";
import APIintigration from "./components/Header/MicrosoftCloudSolutions/Microsoft-365/APIintigration.jsx";
import MicrosoftCollaborations from "./components/Header/MicrosoftCloudSolutions/Microsoft-365/MicrosoftCollaborations.jsx";
import MicrosoftDefender from "./components/Header/MicrosoftCloudSolutions/Microsoft-365/MicrosoftDefender.jsx";
import MicrosoftIntune from "./components/Header/MicrosoftCloudSolutions/Microsoft-365/MicrosoftIntune.jsx";
import MicrosoftTeams from "./components/Header/MicrosoftCloudSolutions/Microsoft-365/MicrosoftTeams.jsx";
import MicrosoftTeamsTeleSystem from "./components/Header/MicrosoftCloudSolutions/Microsoft-365/MicrosoftTeamsTeleSystem.jsx";
import OutlookAndExchangeOnline from "./components/Header/MicrosoftCloudSolutions/Microsoft-365/OutlookAndExchangeOnline.jsx";
import PowerApplication from "./components/Header/MicrosoftCloudSolutions/Microsoft-365/PowerApplication.jsx";
import PowerAutomation from "./components/Header/MicrosoftCloudSolutions/Microsoft-365/PowerAutomation.jsx";
import PowerPages from "./components/Header/MicrosoftCloudSolutions/Microsoft-365/PowerPages.jsx";
import ProductivityTools from "./components/Header/MicrosoftCloudSolutions/Microsoft-365/ProductivityTools.jsx";
import SharePointAndOneDrive from "./components/Header/MicrosoftCloudSolutions/Microsoft-365/SharePointAndOneDrive.jsx";

import AzureId from "./components/Header/MicrosoftCloudSolutions/MicrosoftAzure/AzureId.jsx";
import ApplicationAndAPIintegrations from "./components/Header/MicrosoftCloudSolutions/MicrosoftAzure/ApplicationsAndAPIintegrations.jsx";
import AzureAIService from "./components/Header/MicrosoftCloudSolutions/MicrosoftAzure/AzureAIService.jsx";
import AzureCognitiveService from "./components/Header/MicrosoftCloudSolutions/MicrosoftAzure/AzureCognitiveService.jsx";
import AzureDevopsService from "./components/Header/MicrosoftCloudSolutions/MicrosoftAzure/AzureDevopsService.jsx";
import AzureVirtualWorld from "./components/Header/MicrosoftCloudSolutions/MicrosoftAzure/AzureVirtualWorld.jsx";
import IOTManagement from "./components/Header/MicrosoftCloudSolutions/MicrosoftAzure/IOTManagement.jsx";
import LogicApps from "./components/Header/MicrosoftCloudSolutions/MicrosoftAzure/LogicApps.jsx";
import StorageAndBackup from "./components/Header/MicrosoftCloudSolutions/MicrosoftAzure/StorageAndBackup.jsx";
import BackupAndRecovery from "./components/Header/MicrosoftCloudSolutions/MicrosoftAzure/BackupAndRecovery.jsx";

import APIIntigrations from "./components/Header/MicrosoftCloudSolutions/Microsoft-365-Dynamic/APIIntegrations.jsx";
import BusinessCentral from "./components/Header/MicrosoftCloudSolutions/Microsoft-365-Dynamic/BusinessCentral.jsx";
import CustomerService from "./components/Header/MicrosoftCloudSolutions/Microsoft-365-Dynamic/CustomerService.jsx";
import FieldService from "./components/Header/MicrosoftCloudSolutions/Microsoft-365-Dynamic/FieldService.jsx";
import IOTManagements from "./components/Header/MicrosoftCloudSolutions/Microsoft-365-Dynamic/IOTManagements.jsx";
import SalesAndMarketing from "./components/Header/MicrosoftCloudSolutions/Microsoft-365-Dynamic/SalesAndMarketing.jsx";
import SupplyChainManagement from "./components/Header/MicrosoftCloudSolutions/Microsoft-365-Dynamic/SupplyChainManagement.jsx";

import ServerToCloud from "./components/Header/MicrosoftCloudSolutions/DataAndEmailMigration/ServerToCloud.jsx";
import ServerToServer from "./components/Header/MicrosoftCloudSolutions/DataAndEmailMigration/ServerToServer.jsx";
import CloudToCloud from "./components/Header/MicrosoftCloudSolutions/DataAndEmailMigration/CloudToCloud.jsx";

import Barrakuda from "./components/Header/SecuritySolutions/EmailSecurity/Barrakuda.jsx";
import Sophos from "./components/Header/SecuritySolutions/EmailSecurity/Sophos.jsx";

import Barrakudaa from "./components/Header/SecuritySolutions/EndPointSecurity/Barracuda.jsx";
import Kaspersky from "./components/Header/SecuritySolutions/EndPointSecurity/Kaspersky.jsx";
import MicrosoftDefenders from "./components/Header/SecuritySolutions/EndPointSecurity/MicrosoftDefender.jsx";
import Sophoss from "./components/Header/SecuritySolutions/EndPointSecurity/Sophos.jsx";

import Acronis from "./components/Header/BackupSolutions/DataBackup/Acronis.jsx";
import AzureStorage from "./components/Header/BackupSolutions/DataBackup/AzureStorage.jsx";
import CloudAlley from "./components/Header/BackupSolutions/DataBackup/CloudAlley.jsx";
import CloudAlleys from "./components/Header/BackupSolutions/EmailBackup/CloudAlley.jsx";

import ApplicationMigration from "./components/Header/Migrations/ApplicationMigration.jsx";
import CtoCMigration from "./components/Header/Migrations/CtoCMigration.jsx";
import StoCMigration from "./components/Header/Migrations/StoCMigration.jsx";
import StoSMigration from "./components/Header/Migrations/StoSMigration.jsx";
import WebsiteMigration from "./components/Header/Migrations/WebsiteMigration.jsx";

import CustomerApiIntegration from "./components/Header/DevelopmentAndIntegration/CustomerApiIntegration.jsx";
import CustomWebApp from "./components/Header/DevelopmentAndIntegration/CustomWebApp.jsx";
import Dataverse from "./components/Header/DevelopmentAndIntegration/Dataverse.jsx";
import MicrosoftTeam from "./components/Header/DevelopmentAndIntegration/MicrosoftTeams.jsx";
import PowerApps from "./components/Header/DevelopmentAndIntegration/PowerApp.jsx";
import PowerPage from "./components/Header/DevelopmentAndIntegration/PowerPages.jsx";
import WebsiteDevelopemnt from "./components/Header/DevelopmentAndIntegration/WebsiteDevelopment.jsx";

import ManagedSupport from "./components/Header/ProfessionalSupport&Service/ManagedSupport.jsx";
import OnSiteSupport from "./components/Header/ProfessionalSupport&Service/OnSiteSupport.jsx";
import RemoteSupport from "./components/Header/ProfessionalSupport&Service/RemoteSupport.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/services" element={<Services />} />
      <Route path="/whygetmax" element={<WhyGetMax />} />
      <Route path="/success" element={<SuccessStory />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />

      {/* DropdownMenu Routing */}
      <Route path="/microsoft-365/copilot" element={<Copilot />} />
      <Route
        path="/microsoft-365/api-integration"
        element={<APIintigration />}
      />
      <Route
        path="microsoft-365/microsoft-collaboration-tools"
        element={<MicrosoftCollaborations />}
      />
      <Route
        path="/microsoft-365/microsoft-365-defender"
        element={<MicrosoftDefender />}
      />
      <Route
        path="/microsoft-365/microsoft-365-intune"
        element={<MicrosoftIntune />}
      />
      <Route
        path="/microsoft-365/microsoft-teams"
        element={<MicrosoftTeams />}
      />
      <Route
        path="/microsoft-365/microsoft-teams-telephony-system"
        element={<MicrosoftTeamsTeleSystem />}
      />
      <Route
        path="/microsoft-365/outlook-exchange-online"
        element={<OutlookAndExchangeOnline />}
      />
      <Route
        path="/microsoft-365/power-application"
        element={<PowerApplication />}
      />
      <Route
        path="/microsoft-365/power-automation"
        element={<PowerAutomation />}
      />
      <Route path="/microsoft-365/power-pages" element={<PowerPages />} />
      <Route
        path="/microsoft-365/productivity-tools"
        element={<ProductivityTools />}
      />
      <Route
        path="/microsoft-365/sharepoint-one-drive"
        element={<SharePointAndOneDrive />}
      />

      {/* Microsoft Azure */}

      <Route path="/microsoft-azure/azure-id" element={<AzureId />} />
      <Route
        path="/microsoft-azure/azure-virtual-world"
        element={<AzureVirtualWorld />}
      />
      <Route
        path="/microsoft-azure/azure-ai-services"
        element={<AzureAIService />}
      />
      <Route
        path="/microsoft-azure/azure-cognitive-services"
        element={<AzureCognitiveService />}
      />
      <Route
        path="/microsoft-azure/azure-devops-services"
        element={<AzureDevopsService />}
      />
      <Route
        path="/microsoft-azure/storage-and-backup"
        element={<StorageAndBackup />}
      />
      <Route
        path="/microsoft-azure/storage-and-recovery"
        element={<BackupAndRecovery />}
      />
      <Route path="/microsoft-azure/logic-apps" element={<LogicApps />} />
      <Route
        path="/microsoft-azure/iot-management"
        element={<IOTManagement />}
      />
      <Route
        path="/microsoft-azure/application-and-api-integration"
        element={<ApplicationAndAPIintegrations />}
      />

      {/* Microsoft Dynamics 365 Sales and Marketing */}
      <Route
        path="microsoft-365-dynamics/dynamics-365-sales-and-marketing"
        element={<SalesAndMarketing />}
      />
      <Route
        path="/microsoft-365-dynamics/dynamics-365-business-central"
        element={<BusinessCentral />}
      />
      <Route
        path="/microsoft-365-dynamics/dynamics-365-customer-service"
        element={<CustomerService />}
      />
      <Route
        path="/microsoft-365-dynamics/dynamics-365-field-service"
        element={<FieldService />}
      />
      <Route
        path="/microsoft-365-dynamics/dynamics-365-supply-chain-management"
        element={<SupplyChainManagement />}
      />
      <Route
        path="/microsoft-365-dynamics/iot-management"
        element={<IOTManagements />}
      />
      <Route
        path="/microsoft-365-dynamics/api-integrations"
        element={<APIIntigrations />}
      />

      {/* Data and Email Migration */}
      <Route
        path="/data-email-migration/server-to-cloud"
        element={<ServerToCloud />}
      />
      <Route
        path="/data-email-migration/cloud-to-cloud"
        element={<CloudToCloud />}
      />
      <Route
        path="/data-email-migration/server-to-server"
        element={<ServerToServer />}
      />

      {/* Security Solutions */}
      <Route
        path="/security-solutions/email-security/sophos"
        element={<Sophos />}
      />
      <Route
        path="/security-solutions/email-security/barracuda"
        element={<Barrakuda />}
      />
      <Route
        path="/security-solutions/endpoint-security/microsoft-defender"
        element={<MicrosoftDefenders />}
      />
      <Route
        path="/security-solutions/endpoint-security/sophos"
        element={<Sophoss />}
      />
      <Route
        path="/security-solutions/endpoint-security/barracuda"
        element={<Barrakudaa />}
      />
      <Route
        path="/security-solutions/endpoint-security/kaspersky"
        element={<Kaspersky />}
      />

      {/* BackupSolutions */}
      <Route
        path="/backup-solutions/data-backup/acronis"
        element={<Acronis />}
      />
      <Route
        path="/backup-solutions/data-backup/acronis"
        element={<Acronis />}
      />
      <Route
        path="/backup-solutions/data-backup/azure-storage"
        element={<AzureStorage />}
      />
      <Route
        path="/backup-solutions/data-backup/cloud-alley"
        element={<CloudAlley />}
      />
      <Route
        path="/backup-solutions/email-backup/cloud-alley"
        element={<CloudAlleys />}
      />

      {/* Migrations */}
      <Route
        path="/migration/application-migration"
        element={<ApplicationMigration />}
      />
      <Route
        path="/migration/cloud-to-cloud-migration"
        element={<CtoCMigration />}
      />
      <Route
        path="/migration/server-to-cloud-migration"
        element={<StoCMigration />}
      />
      <Route
        path="/migration/server-to-server-migration"
        element={<StoSMigration />}
      />
      <Route
        path="/migration/website-migration"
        element={<WebsiteMigration />}
      />

      {/* Developement And Integration */}
      <Route
        path="/development-integration-services/website-development"
        element={<WebsiteDevelopemnt />}
      />
      <Route
        path="/development-integration-services/custom-web-app"
        element={<CustomWebApp />}
      />
      <Route
        path="/development-integration-services/customer-api-integrations"
        element={<CustomerApiIntegration />}
      />
      <Route
        path="/development-integration-services/power-app"
        element={<PowerApps />}
      />
      <Route
        path="/development-integration-services/microsoft-teams"
        element={<MicrosoftTeam />}
      />
      <Route
        path="/development-integration-services/power-pages"
        element={<PowerPage />}
      />
      <Route
        path="/development-integration-services/dataverse"
        element={<Dataverse />}
      />

      {/* Professional Support And Service */}

      <Route
        path="/professional-support-services/remote-support"
        element={<RemoteSupport />}
      />
      <Route
        path="/professional-support-services/remote-support"
        element={<RemoteSupport />}
      />
      <Route
        path="/professional-support-services/on-site-support"
        element={<OnSiteSupport />}
      />
      <Route
        path="/professional-support-services/managed-support-services"
        element={<ManagedSupport />}
      />

      <Route path="/microsoft-365/onedrive" element={<OnedrivePage />} />
    </Route>
  )
);

// Set the app element for react-modal
Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router}>
        <ErrorBoundary>
          <App />
          <CountryAndLanguage />
          <DropdownMenu />
        </ErrorBoundary>
      </RouterProvider>
    </LanguageProvider>
  </React.StrictMode>
);
