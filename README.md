# Robot Replay Research

This repository contains the independent research page and reproducibility
artifacts for two simulation studies by Zhangwei Chen.

## Papers

### RSS

**When Does Reading a Cartesian Target Change Robot Replay?**

The RSS study derives when a target readback can reduce the worst-case error of
a bounded Cartesian write, then traces the changed target through Sawyer
contact and final pushing outcomes.

- [Manuscript PDF](papers/rss/rss-manuscript.pdf)
- [LaTeX source](papers/rss/main.tex)
- [Figures](papers/rss/figures/)

### IEEE RA-L

**When Does Controller Target Readback Help Cartesian Demonstration Replay?**

The RA-L study separates target-writing error from physical tracking error
across Fetch, Sawyer, and Panda replay conditions. It tests whether hand
feedback can recover the replay before a target readback is necessary.

- [Manuscript PDF](papers/ral/ral-manuscript.pdf)
- [LaTeX source](papers/ral/main.tex)
- [Figures](papers/ral/figures/)

The papers share a controller setting and use separate protocols, claims,
cohorts, and figures. Neither manuscript claims real-robot deployment or a
universal readback policy. The public page labels the current documents as
submission or manuscript drafts.

## Website

The repository root is a dependency-free GitHub Pages site. It follows the
research-project page pattern used by OpenVLA, Octo, Mobile ALOHA, and
PointWorld: a falsifiable claim, artifact links, method evidence, measured
comparisons, boundary statements, and source files.

## Author

Zhangwei Chen, independent researcher.

