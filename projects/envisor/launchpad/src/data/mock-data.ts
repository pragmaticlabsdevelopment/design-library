import { Phase, DataSource, Finding } from "@/lib/types";

export const initialPhases: Phase[] = [
  {
    id: "project-intake",
    name: "Project Intake",
    description: "Define the project, sponsor, location, timeline, and review goal.",
    helperText:
      "Define the project, sponsor, location, timeline, and review goal so Envisor can identify applicable jurisdictions and likely review requirements.",
    order: 1,
    status: "active",
    tasks: [
      {
        id: "intake-1",
        phaseId: "project-intake",
        title: "Confirm project name and sponsor",
        description:
          "Enter the official project name, sponsoring organization, and primary point of contact for the environmental review.",
        status: "waiting_on_customer",
        owner: "customer",
        estimatedEffort: "5 min",
      },
      {
        id: "intake-2",
        phaseId: "project-intake",
        title: "Add project location and boundaries",
        description:
          "Provide the project site address, parcel numbers, or upload a GIS boundary file so Envisor can identify applicable jurisdictions and sensitive areas.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "10 min",
      },
      {
        id: "intake-3",
        phaseId: "project-intake",
        title: "Upload project description",
        description:
          "Upload the project description document or narrative that explains the proposed action, purpose and need, and key project components.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "5 min",
      },
      {
        id: "intake-4",
        phaseId: "project-intake",
        title: "Identify lead agency",
        description:
          "Specify which agency has primary responsibility for conducting the environmental review (e.g., city planning department, Caltrans, USACE).",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "5 min",
      },
      {
        id: "intake-5",
        phaseId: "project-intake",
        title: "Identify cooperating and responsible agencies",
        description:
          "List any cooperating agencies (NEPA) or responsible/trustee agencies (CEQA) that have permitting or review authority over the project.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "10 min",
      },
      {
        id: "intake-6",
        phaseId: "project-intake",
        title: "Select expected review pathway",
        description:
          "Indicate the anticipated environmental review type: CEQA only, NEPA only, joint CEQA/NEPA, or another applicable framework.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "5 min",
      },
      {
        id: "intake-7",
        phaseId: "project-intake",
        title: "Add key dates and funding triggers",
        description:
          "Enter critical dates — NOP publication, public comment deadlines, board hearing dates, grant milestones — so Envisor can track schedule risk.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "10 min",
      },
    ],
  },
  {
    id: "document-collection",
    name: "Document Collection",
    description: "Upload plans, studies, permits, correspondence, and supporting documents.",
    helperText:
      "Upload or connect the reports, studies, plans, agency correspondence, and prior environmental documents Envisor needs to assess completeness.",
    order: 2,
    status: "locked",
    tasks: [
      {
        id: "docs-1",
        phaseId: "document-collection",
        title: "Upload project plans and drawings",
        description:
          "Upload site plans, grading plans, architectural drawings, and other project design documents.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "15 min",
      },
      {
        id: "docs-2",
        phaseId: "document-collection",
        title: "Upload prior environmental studies",
        description:
          "Upload any previously completed environmental documents — Initial Studies, Negative Declarations, prior EIRs, Categorical Exemptions, or EAs.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "10 min",
      },
      {
        id: "docs-3",
        phaseId: "document-collection",
        title: "Upload technical reports",
        description:
          "Upload biological assessments, cultural resource surveys, traffic impact analyses, noise studies, air quality modeling, and other technical reports.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "15 min",
      },
      {
        id: "docs-4",
        phaseId: "document-collection",
        title: "Connect cloud document sources",
        description:
          "Link SharePoint, Google Drive, Box, or Dropbox folders containing project materials so Envisor can index them directly.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "10 min",
      },
      {
        id: "docs-5",
        phaseId: "document-collection",
        title: "Add agency correspondence",
        description:
          "Upload or connect email archives, NOP responses, consultation letters, and other agency communications related to the project.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "10 min",
      },
      {
        id: "docs-6",
        phaseId: "document-collection",
        title: "Add public comments or prior notices",
        description:
          "Upload any public comments received, Notices of Preparation, Notices of Intent, public hearing transcripts, or scoping meeting notes.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "10 min",
      },
      {
        id: "docs-7",
        phaseId: "document-collection",
        title: "Flag missing documents",
        description:
          "Review the document inventory and flag any materials you know are needed but haven't been uploaded yet. Envisor will track these gaps.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "5 min",
      },
    ],
  },
  {
    id: "regulatory-context",
    name: "Regulatory Pathway",
    description: "Identify likely agencies, permits, jurisdictions, and environmental review pathways.",
    helperText:
      "Identify the environmental review framework, applicable agencies, permits, jurisdictions, and compliance requirements for this project.",
    order: 3,
    status: "locked",
    tasks: [
      {
        id: "reg-1",
        phaseId: "regulatory-context",
        title: "Confirm CEQA / NEPA pathway",
        description:
          "Verify the environmental review pathway based on project details and lead agency determination. Envisor will suggest the most likely pathway.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "5 min",
      },
      {
        id: "reg-2",
        phaseId: "regulatory-context",
        title: "Identify permit requirements",
        description:
          "List required permits and approvals — grading permits, encroachment permits, Section 404/401 permits, incidental take permits, coastal development permits, etc.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "15 min",
      },
      {
        id: "reg-3",
        phaseId: "regulatory-context",
        title: "Connect agency portals",
        description:
          "Link to relevant agency portals so Envisor can cross-reference project records — CEQA Clearinghouse, NEPA e-Filing, EPA ECHO, USFWS IPaC, and others.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "10 min",
      },
      {
        id: "reg-4",
        phaseId: "regulatory-context",
        title: "Review CEQA Clearinghouse records",
        description:
          "Envisor searches the CEQA Clearinghouse for existing filings, NOPs, and determinations related to the project site or similar projects in the area.",
        status: "not_started",
        owner: "envisor",
        estimatedEffort: "Auto",
      },
      {
        id: "reg-5",
        phaseId: "regulatory-context",
        title: "Review NEPA e-Filing records",
        description:
          "Envisor searches the NEPA e-Filing system for relevant Environmental Assessments, EISs, and Records of Decision in the project area.",
        status: "not_started",
        owner: "envisor",
        estimatedEffort: "Auto",
      },
      {
        id: "reg-6",
        phaseId: "regulatory-context",
        title: "Review EPA ECHO database",
        description:
          "Envisor checks EPA Enforcement and Compliance History for facility permits, inspections, violations, and enforcement actions near the project site.",
        status: "not_started",
        owner: "envisor",
        estimatedEffort: "Auto",
      },
      {
        id: "reg-7",
        phaseId: "regulatory-context",
        title: "Review USFWS IPaC species list",
        description:
          "Envisor queries the Information for Planning and Consultation system for threatened/endangered species and critical habitat in the project area.",
        status: "not_started",
        owner: "envisor",
        estimatedEffort: "Auto",
      },
      {
        id: "reg-8",
        phaseId: "regulatory-context",
        title: "Review state and regional agency databases",
        description:
          "Envisor checks state water board, air quality management district, and regional agency databases for applicable requirements and project-area records.",
        status: "not_started",
        owner: "envisor",
        estimatedEffort: "Auto",
      },
      {
        id: "reg-9",
        phaseId: "regulatory-context",
        title: "Confirm consultation requirements",
        description:
          "Based on regulatory context, confirm which formal consultations are required — Section 7, Section 106, tribal consultation, coastal commission, etc.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "10 min",
      },
    ],
  },
  {
    id: "technical-review",
    name: "Technical Review",
    description: "Envisor checks for gaps, risks, inconsistencies, and missing materials.",
    helperText:
      "Envisor reviews the submitted materials for completeness, consistency, potential gaps, and review risks before the broader team is invited in.",
    order: 4,
    status: "locked",
    tasks: [
      {
        id: "review-1",
        phaseId: "technical-review",
        title: "Check document completeness",
        description:
          "Envisor verifies that all expected document types are present based on the project scope, review pathway, and regulatory context.",
        status: "not_started",
        owner: "envisor",
        estimatedEffort: "Auto",
      },
      {
        id: "review-2",
        phaseId: "technical-review",
        title: "Validate study coverage",
        description:
          "Envisor cross-references technical studies against the project description to verify that all relevant environmental topics are addressed.",
        status: "not_started",
        owner: "envisor",
        estimatedEffort: "Auto",
      },
      {
        id: "review-3",
        phaseId: "technical-review",
        title: "Identify missing technical areas",
        description:
          "Flag environmental topic areas where no supporting study or analysis has been provided — e.g., missing noise study, absent tribal cultural resources assessment.",
        status: "not_started",
        owner: "envisor",
        estimatedEffort: "Auto",
      },
      {
        id: "review-4",
        phaseId: "technical-review",
        title: "Compare scope against submitted materials",
        description:
          "Check that the project description, site boundaries, and stated impacts are consistent across all submitted documents.",
        status: "not_started",
        owner: "envisor",
        estimatedEffort: "Auto",
      },
      {
        id: "review-5",
        phaseId: "technical-review",
        title: "Surface potential environmental risks",
        description:
          "Identify high-risk environmental topics based on project location, scope, and regulatory context — sensitive habitats, tribal resources, contaminated sites, etc.",
        status: "not_started",
        owner: "envisor",
        estimatedEffort: "Auto",
      },
      {
        id: "review-6",
        phaseId: "technical-review",
        title: "Flag outdated reports",
        description:
          "Identify technical studies or data sources that may be outdated based on their publication date relative to current agency guidelines.",
        status: "not_started",
        owner: "envisor",
        estimatedEffort: "Auto",
      },
      {
        id: "review-7",
        phaseId: "technical-review",
        title: "Flag inconsistent project descriptions",
        description:
          "Detect discrepancies in project descriptions, acreage figures, unit counts, or other key details across different submitted documents.",
        status: "not_started",
        owner: "envisor",
        estimatedEffort: "Auto",
      },
      {
        id: "review-8",
        phaseId: "technical-review",
        title: "Create review notes",
        description:
          "Envisor compiles its findings into structured review notes that the project champion can review and share with the team.",
        status: "not_started",
        owner: "envisor",
        estimatedEffort: "Auto",
      },
      {
        id: "review-9",
        phaseId: "technical-review",
        title: "Assign follow-up items",
        description:
          "Based on the technical review, create follow-up tasks assigned to the appropriate team member or consultant for resolution.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "15 min",
      },
    ],
  },
  {
    id: "findings-readiness",
    name: "Review-Ready Handoff",
    description: "Review final readiness summary, open issues, and recommended next steps.",
    helperText:
      "Review Envisor's findings, resolve open issues, and confirm the project is ready for broader team access.",
    order: 5,
    status: "locked",
    tasks: [
      {
        id: "findings-1",
        phaseId: "findings-readiness",
        title: "Review open findings",
        description:
          "Review all findings from the technical review — gaps, risks, inconsistencies, and outdated materials — and determine which need resolution before launch.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "20 min",
      },
      {
        id: "findings-2",
        phaseId: "findings-readiness",
        title: "Resolve blockers",
        description:
          "Address any items flagged as blockers — missing critical documents, unresolved agency questions, or incomplete regulatory context.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "Varies",
      },
      {
        id: "findings-3",
        phaseId: "findings-readiness",
        title: "Approve document set",
        description:
          "Confirm that the current document set is sufficient to proceed into the full Envisor workspace, even if some follow-ups remain open.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "5 min",
      },
      {
        id: "findings-4",
        phaseId: "findings-readiness",
        title: "Confirm responsible owners",
        description:
          "Assign ownership for each remaining follow-up item — who on the team or which consultant is responsible for resolving each finding.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "10 min",
      },
      {
        id: "findings-5",
        phaseId: "findings-readiness",
        title: "Confirm next agency actions",
        description:
          "Document the next steps with each involved agency — upcoming consultations, permit applications, comment period dates, hearing schedules.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "10 min",
      },
      {
        id: "findings-6",
        phaseId: "findings-readiness",
        title: "Generate readiness summary",
        description:
          "Envisor compiles a readiness summary covering project status, open items, risk areas, and a recommendation on workspace launch readiness.",
        status: "not_started",
        owner: "envisor",
        estimatedEffort: "Auto",
      },
      {
        id: "findings-7",
        phaseId: "findings-readiness",
        title: "Invite broader project team",
        description:
          "Add team members, reviewers, and consultants who will work in the full Envisor workspace. Assign roles and permissions.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "10 min",
      },
      {
        id: "findings-8",
        phaseId: "findings-readiness",
        title: "Move into Envisor workspace",
        description:
          "Transition the project from LaunchPad into the full Envisor Project Command Center. The team can now begin environmental review workflows.",
        status: "not_started",
        owner: "customer",
        estimatedEffort: "5 min",
      },
    ],
  },
];

export const initialDataSources: DataSource[] = [
  {
    id: "src-1",
    name: "SharePoint",
    category: "Cloud Storage",
    description:
      "Connect a SharePoint site or document library containing project materials.",
    selected: false,
    setupComplete: false,
  },
  {
    id: "src-2",
    name: "Google Drive",
    category: "Cloud Storage",
    description:
      "Connect a shared Google Drive folder with reports, plans, and correspondence.",
    selected: false,
    setupComplete: false,
  },
  {
    id: "src-3",
    name: "Box",
    category: "Cloud Storage",
    description:
      "Connect Box folders containing environmental documents and legal review files.",
    selected: false,
    setupComplete: false,
  },
  {
    id: "src-4",
    name: "Dropbox Business",
    category: "Cloud Storage",
    description:
      "Connect Dropbox folders with technical studies, biological assessments, and project files.",
    selected: false,
    setupComplete: false,
  },
  {
    id: "src-5",
    name: "CEQA Clearinghouse",
    category: "Agency Portal",
    description:
      "Search and link CEQA filings, Notices of Preparation, and determinations for the project area.",
    selected: false,
    setupComplete: false,
  },
  {
    id: "src-6",
    name: "NEPA e-Filing System",
    category: "Agency Portal",
    description:
      "Search and link NEPA documents — Environmental Assessments, EISs, and Records of Decision.",
    selected: false,
    setupComplete: false,
  },
  {
    id: "src-7",
    name: "EPA ECHO",
    category: "Environmental Database",
    description:
      "Query EPA Enforcement and Compliance History for permits, inspections, and violations near the site.",
    selected: false,
    setupComplete: false,
  },
  {
    id: "src-8",
    name: "USFWS IPaC",
    category: "Environmental Database",
    description:
      "Query the Information for Planning and Consultation system for species lists and critical habitat.",
    selected: false,
    setupComplete: false,
  },
  {
    id: "src-9",
    name: "State Water Board",
    category: "Agency Portal",
    description:
      "Connect to State Water Resources Control Board portal for water quality and discharge permits.",
    selected: false,
    setupComplete: false,
  },
  {
    id: "src-10",
    name: "Air Quality Management District",
    category: "Agency Portal",
    description:
      "Connect to regional AQMD document database for air quality permits and monitoring data.",
    selected: false,
    setupComplete: false,
  },
  {
    id: "src-11",
    name: "Outlook / Exchange",
    category: "Correspondence",
    description:
      "Connect email archives to import agency correspondence, NOP responses, and consultation letters.",
    selected: false,
    setupComplete: false,
  },
  {
    id: "src-12",
    name: "Local Agency GIS",
    category: "Environmental Database",
    description:
      "Connect GIS data for project site boundaries, sensitive habitats, and land use designations.",
    selected: false,
    setupComplete: false,
  },
];

export const initialFindings: Finding[] = [
  {
    id: "f-1",
    title: "Traffic Impact Analysis not found",
    category: "Missing Document",
    severity: "blocker",
    description:
      "The Draft EIR references a Traffic Impact Analysis (Section 4.12) but no traffic study was uploaded or found in connected sources.",
    resolved: false,
  },
  {
    id: "f-2",
    title: "Biological assessment may be outdated",
    category: "Outdated Report",
    severity: "warning",
    description:
      "The Biological Assessment is dated March 2019 — more than 5 years old. USFWS and CDFW may require an updated assessment for current species conditions.",
    resolved: false,
  },
  {
    id: "f-3",
    title: "Inconsistent project acreage across documents",
    category: "Inconsistency",
    severity: "warning",
    description:
      'The project description states 42.5 acres, but the site plan shows 38.7 acres and the grading plan references 44.1 acres. These should be reconciled.',
    resolved: false,
  },
  {
    id: "f-4",
    title: "No tribal cultural resources assessment",
    category: "Missing Study",
    severity: "blocker",
    description:
      "AB 52 consultation may be required, but no tribal cultural resources assessment or consultation documentation was provided.",
    resolved: false,
  },
  {
    id: "f-5",
    title: "Phase I ESA access restricted",
    category: "Access Issue",
    severity: "warning",
    description:
      "A Phase I Environmental Site Assessment was detected in Box but Envisor does not have read access. Grant access or upload directly.",
    resolved: false,
  },
  {
    id: "f-6",
    title: "Air quality modeling uses superseded methodology",
    category: "Outdated Report",
    severity: "info",
    description:
      "The air quality study references CalEEMod 2020.4.0. The current version is 2022.1.1. The lead agency may accept the existing analysis but updated modeling is recommended.",
    resolved: false,
  },
  {
    id: "f-7",
    title: "Section 7 consultation status unknown",
    category: "Regulatory Gap",
    severity: "warning",
    description:
      "IPaC results show two listed species in the project area, but no evidence of formal or informal Section 7 consultation was found in submitted materials.",
    resolved: false,
  },
  {
    id: "f-8",
    title: "All CEQA Clearinghouse records linked",
    category: "Regulatory Context",
    severity: "info",
    description:
      "Three prior CEQA filings for the project site have been identified and linked — 2 Negative Declarations (2008, 2014) and 1 Categorical Exemption (2020).",
    resolved: true,
  },
];
