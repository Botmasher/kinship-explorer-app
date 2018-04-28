# Sources for the Kinship Terms Explorer

## Overview of sources

This app and the embedded visualization present data I've encountered in my research for the animation I'm preparing. I gave my main sources in the [Google doc](https://docs.google.com/document/d/1uwqu4DXqvhbLhIz689cqp0r-feKzyN6YT08TG4hTXGs/) for that animation. Brian Schwimmer's [pages at U of Manitoba](https://umanitoba.ca/faculties/arts/anthropology/tutor/kinterms/termsys.html) were a core starting point for this tool. Many of the languages used to demonstrate kin systems on that site are included in the final data. However, they were checked and modified based on specific sources.

The current app only accesses one example language per system, but this document maintains a list of sources for all languages in the game JSON data. [Wiktionary](https://www.wiktionary.org/) was used as a first-pass check for many terms.

## Sources for specific languages

Besides the general sources above, others were needed to find and check terms in specific languages. These included:

- [Nā puke wehewehe](http://wehewehe.org/) for checking Hawaiʻian terms
- _Lengua y cultura Yanomami_ (Stenou et al.) for proposed Yanomamö grandparent terms
- [Online Twi Dictionary](http://www.twi.bb) for proposed Akan Twi grandparent terms
- Navajo data (not accessed by current frontend components) are pulled from three sources:
	- http://www.unco.edu/library/pdf/Navajo_English_Dictionary.pdf
	- https://anthrosource.onlinelibrary.wiley.com/doi/pdf/10.1525/aa.1970.72.6.02a00190
	- http://navajopeople.org/blog/ke-dine-navajo-kinship-system/
- [Perseus lexicon](http://www.perseus.tufts.edu/hopper/resolveform?lang=Latin) Latin headword search
- Igbo has been tricky to check, but I've used:
	- data from Ardener's 1954 paper "The Kinship Terminology of a Group of Southern Ibo" cited on Schwimmer's site
	- http://www.rogerblench.info/Language/Niger-Congo/VN/Igboid/Igbo%20Dictionary.pdf

## Caveats

There are many cultural complications behind the simple terms used here. Consider the trickiness around the [Igbo terms](https://umanitoba.ca/faculties/arts/anthropology/tutor/kinterms/igbo_terms.html). Hawaiʻian shows variation between older/younger sibling terms. Akan Twi terms actually reclassify the cousin marked "father" upon ego's father's death.

## Contributions

More to add? Consider submitting a pull request with corrections or additions! If you're specifically interested in modifying the terms, check out the JSON data (currently in the visualization repo but eventually scheduled to live outside the game build).
