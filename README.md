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

## Rendered evidence videos

The `assets/videos/` directory contains selected 1920×1080, 20 FPS H.264 replays regenerated from the frozen RSS and RA-L trajectory archives. The accompanying manifests record source archive hashes, method, seed, condition, resolution, and output hashes. The clips are demonstration artifacts and do not add new experimental trials.

- RSS Sawyer paired rescue and loss clips: `assets/videos/rss-sawyer-*-1080p.mp4`
- RA-L Fetch paired direct-copy and measured-reference clips: `assets/videos/ral-fetch-*-1080p.mp4`
- Provenance: `assets/videos/rss-render-manifest.json` and `assets/videos/ral-fetch-render-manifest.json`

## Complex tabletop extension

The public page also includes a separately labeled extension gallery for
cluttered and partially occluded tabletop scenes:

- `complex-online-six-objects.mp4` and `complex-online-seven-objects.mp4`
  show exploratory OpenVLA-OFT online comparisons with periodic visual queries.
- `complex-fixed-occlusion.mp4` and `complex-cross-task-drawer.mp4` show
  fixed human-action replays used to isolate occlusion and physical-contact
  effects.

These clips are simulation evidence and are not additional RSS or RA-L trials.
They do not change the paper statistics or establish a new algorithmic claim.
The media provenance and source-report mapping are recorded in
`assets/videos/complex-tabletop-manifest.json`.

## Website

The repository root is a dependency-free GitHub Pages site. It follows the
research-project page pattern used by OpenVLA, Octo, Mobile ALOHA, and
PointWorld: a falsifiable claim, artifact links, method evidence, measured
comparisons, boundary statements, and source files.

## Author

Zhangwei Chen, independent researcher.

