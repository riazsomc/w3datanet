---
title: "ICD-11 Implementation in Bangladesh: Lessons from the First National Pilot"
date: 2026-03-09
description: "Practical lessons from Bangladesh’s early ICD-11 pilot across six hospitals, highlighting implementation challenges, system limitations, and the architectural considerations shaping the next phase of national deployment."
tags: ["ICD-11", "Digital Health", "Health Information Systems", "Health Interoperability", "Health Data Standards", "Bangladesh"]
---

This article describes Bangladesh’s early experience implementing ICD-11 across multiple hospital information systems and the practical lessons learned from the first national pilot.

In late 2023, Bangladesh began transitioning from ICD-10 to ICD-11 with the goal of modernizing the national [health information system](/work/), strengthening national [digital health infrastructure](/projects) and improving disease classification and reporting. To explore practical implementation pathways, a pilot phase was launched in six hospitals using two different approaches based on the existing digital infrastructure of the facilities.

The pilot was designed to understand how ICD-11 could operate within real hospital environments and how existing health information systems would need to evolve to support it.

---

## The Pilot Phase: Six Hospitals, Two Implementation Approaches

The pilot hospitals were divided into two groups based on their health information platforms.

### OpenMRS-Based Hospitals

Three district hospitals used OpenMRS integrated with the WHO ICD-11 API to support coding of both morbidity and mortality data. These hospitals were:

- Cumilla District Hospital  
- Nilphamari District Hospital  
- Barguna District Hospital  

The integration allowed structured coding of diagnoses for outpatient departments (OPD), emergency departments, and Medical Certification of Cause of Death (MCCOD).

### DHIS2-Based Hospitals

Three other hospitals implemented ICD-11 within the DHIS2 platform using manually configured dropdown lists containing ICD-11 codes. These hospitals were:

- Cox’s Bazar District Hospital  
- Khulna Medical College Hospital  
- Rajshahi Medical College Hospital  

Bangladesh initially planned to develop an integrated morbidity and mortality tracker within DHIS2. WHO had already developed a customized ICD-11 application for MCCOD, but no equivalent application was available for morbidity coding during the pilot phase. As a result, ICD-11 codes had to be incorporated manually through dropdown lists.

Bangladesh continued using this method to maintain consistency while simultaneously requesting WHO to develop a customized morbidity application that would enable full ICD-11 integration within DHIS2.

---

## Challenges Encountered During the Pilot Phase

The pilot phase revealed several operational and architectural challenges.

### Challenges in OpenMRS Implementation

**Limited Scope of ICD-11 Usage**

In Bangladesh, the inpatient module of OpenMRS is still under development. Because of this limitation, ICD-11 could only be used in outpatient departments, emergency departments, and MCCOD processes.

**Data Remaining Locally Stored**

The OpenMRS implementation did not initially synchronize data with the national routine health information system. Hospitals therefore continued entering routine statistics into DHIS2, resulting in a double workload.

**Limited Use of Postcoordination**

Observations from the pilot phase showed very little use of ICD-11 postcoordination in OpenMRS environments. This suggested that additional training and system improvements would be necessary for effective use of ICD-11's advanced coding capabilities.

**Initial Absence of Foundation URI Storage**

At the beginning of the pilot, only ICD-11 codes were stored. The system did not store the `foundationUri`. Later it became clear that storing the foundation URI was important for usability and data analysis. This functionality was subsequently added to the backend.

---

### Challenges in DHIS2 Implementation

**Limitations of the Dropdown Approach**

Because DHIS2 did not have a built-in API connection to ICD-11, the system relied on dropdown lists. However, ICD-11 is not designed to function as a dropdown-based classification system, which made data entry difficult and inefficient.

**Dual Data Entry Burden**

Bangladesh’s national health statistics are still produced using ICD-10. Hospitals piloting ICD-11 in DHIS2 therefore had to enter the same information twice—once using ICD-11 and again using ICD-10. This double data entry significantly reduced motivation among healthcare workers to record ICD-11 data.

**System Constraints for Long-Term Use**

The experience demonstrated that ICD-11 cannot sustainably operate through dropdown selections. Long-term implementation will require full hospital automation systems capable of supporting ICD-11 integration.

---

### Inconsistent MCCOD Data Entry

In Bangladesh’s routine health information system, statistical data is typically compiled by statisticians, while MCCOD data entry is performed by nurses in inpatient departments.

This division of responsibilities created additional duplication:

- If piloting occurred in OpenMRS, nurses still had to re-enter MCCOD data in DHIS2.
- If piloting occurred in DHIS2, nurses had to enter data twice—once in ICD-10 and once in ICD-11.

This redundancy led to minimal MCCOD data entry during the pilot phase. However, outpatient and emergency departments performed better because physicians used automation systems directly during patient care, eliminating additional data entry burdens.

---

## Lessons Learned and Next Steps

The pilot phase provided important insights that are shaping the next phase of ICD-11 implementation in Bangladesh.

### Establishing a Central Terminology Registry

Bangladesh is currently developing a **Central Terminology Registry** that will adopt ICD-11 for coding symptoms, signs, diagnoses, and medications. This registry will provide the foundation for nationwide ICD-11 implementation in hospitals with automation systems.

Several factors influenced the selection of ICD-11 for this registry:

- **Free of cost** — no licensing requirements  
- **Global community support** ensuring ongoing development  
- **Availability of APIs and integration tools** provided by WHO

---

### Switching to Localized ICD-11 Deployment

The pilot initially used the WHO ICD-11 API. Bangladesh is now moving toward **localized deployment using Docker containers**. This approach reduces reliance on continuous internet connectivity and improves stability for hospitals, especially those located in remote areas.

---

### Expanding ICD-11 to 150 Hospitals

Building on the pilot experience, Bangladesh plans to expand ICD-11 implementation to **150 hospitals that already have hospital automation systems**. This expansion will allow ICD-11 data to be integrated directly into a central **Shareable Health Record (SHR)** repository, removing the need for duplicate data entry in DHIS2.

---

### Future Role of DHIS2

DHIS2 will continue to play a role in national health information management, but its function will evolve.

For mortality coding, Bangladesh plans to adopt the **WHO MCCOD application with ICD-11 API integration**.

For morbidity coding, two possible paths are being considered:

- Integration of a customized ICD-11 morbidity application within DHIS2 if it becomes available.
- Continued use of ICD-10 for morbidity reporting with a mapping system that gradually transitions ICD-10 data into ICD-11.

---

### Capacity Building for ICD-11 Data Analysis

As ICD-11 becomes integrated into national health systems, Bangladesh recognizes the need to strengthen capacity in analyzing ICD-11 coded data. Healthcare professionals and statisticians will require training to interpret and use ICD-11 data effectively for policy analysis and decision-making.

---

### Gradual Phase-Out of DHIS2 for Patient-Level Coding

As hospital automation systems expand, ICD-11 data will increasingly be recorded directly within hospital systems. Over time, DHIS2 will be phased out for individual patient coding but will continue serving program-specific purposes and national aggregate reporting.

---

## Conclusion

Bangladesh’s transition from ICD-10 to ICD-11 represents a significant step toward modernizing the national health information system.

While the pilot phase revealed several implementation challenges, it also clarified the architectural requirements needed for successful nationwide deployment. The establishment of a Central Terminology Registry, expansion to hospitals with automation systems, and integration with national health records will guide the next stage of implementation.

By addressing issues such as data synchronization, dependency on external APIs, redundant data entry, and analytical capacity, Bangladesh aims to build a more efficient and accurate system for disease classification and health reporting aligned with global standards.
