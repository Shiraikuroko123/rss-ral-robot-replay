The supplied English manuscript is preserved verbatim in `author-manuscript.md`. The typeset text is in `main.tex` and `execution.tex`. Its eight supplied reference entries appear in order in `references-author.tex`. The main file is `main.tex`. Run `latexmk -pdf -halt-on-error -interaction=nonstopmode main.tex` from this directory. A pdfLaTeX distribution with `natbib`, `plainnat`, `times`, `amsmath`, `booktabs`, `flushend` and `hyperref` suffices. The bundled `IEEEtran.cls` comes unmodified from the RSS LaTeX template.

The paper has five content pages and one references page. Four numbered figures use seven supplied PDF panels. Figure 1 puts the research workflow above the measured Panda trajectories. Run these commands from this directory to regenerate the panels.

```
python plot-source/study_workflow.py
python plot-source/panda_trajectories.py
python plot-source/geometry_and_policy.py
python plot-source/push_paths.py
python plot-source/read_contact.py
```

The workflow script exports `figures/study-workflow.pdf` and checks the three experiment counts against the supplied records. The Panda script plots the paired target and hand distances from two steps before the read through twelve steps after at 20 Hz. In the full project checkout, passing `--extract` regenerates its CSV from eight paired layouts. The geometry and policy script compares the observed and analytic maxima for all eight prespecified Sawyer geometries, and selects every held-out condition in which the six tested read policies disagree. The path script selects both mirrored examples from the 216 paired outcomes, checks the native trajectory hash and checks the common goal against the recorded 3-D distance at every step. It uses the frame manifest to check the source PNG hashes, native terminal distances and success flags for the two photographed branches. Both views use the same camera, crop and control step. The last script cross-tabulates first-contact and terminal outcomes for all 216 paired conditions. Replotting needs NumPy, Matplotlib and LaTeX.

Only the anonymized manuscript PDF is intended for the RSS 2027 Stage 1 submission form. The source archive is for the author. The official template's optional example identifier can be filled with a real assigned Paper ID, if requested by the live form. No submission number has been assigned here.

The verified review PDF is `RSS-2027_Cartesian-Target-Readback_Anonymous-Manuscript.pdf`. The matching editable project is `RSS-2027_Cartesian-Target-Readback_LaTeX-Source.zip`. In the workspace checkout, run `python verify_build.py` after editing to publish both files and record their SHA-256 hashes in `verification.json`. The verifier rebuilds the journal-formatted paper from its source archive.
