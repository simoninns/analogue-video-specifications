# Analogue Video Specifications

[View the published documentation on GitHub Pages](https://simoninns.github.io/analogue-video-specifications/)

This repository collects useful specification and technical reference material for analogue television systems and LaserDisc formats, with coverage across PAL and NTSC workflows and related studio, interface, and disc-format standards.

## Documentation site

The repository includes an MkDocs Material configuration and a Nix flake for local preview and GitHub Pages publishing.

### Local preview

If you have Nix with flakes enabled:

```sh
nix develop path:. -c mkdocs serve
```

To produce a local build instead of running the preview server:

```sh
nix develop path:. -c mkdocs build --strict
```

The generated site is written to `site/`.

### Publishing

GitHub Actions publishes the site to GitHub Pages on pushes to the `main` branch and also supports manual runs through the Actions tab.

## Available specifications

### Television and video formats

- [ITU-R BT.1700 - Characteristics of composite video signals for conventional analogue television systems](docs/video_formats/BT-1700-E/BT-1700-E.md)  
	Defines composite analogue colour video signal characteristics used in production and programme interchange. Covers NTSC, PAL, and SECAM systems.

- [ITU-R BT.470-6 - Conventional television systems](docs/video_formats/BT-470-6-1998/BT-470-6-1998.md)  
	Summarises the basic characteristics of established conventional broadcast television systems, including line counts, timing, bandwidth, and signal levels. Covers 525-line and 625-line monochrome and colour systems, including NTSC, PAL, and SECAM variants.

- [ITU-R BT.601-5 - Studio encoding parameters of digital television for standard 4:3 and wide-screen 16:9 aspect ratios](docs/video_formats/BT-601-5-1995/BT-601-5-1995.md)  
	Defines digital component studio encoding parameters and sampling structures for television production. Covers both 525-line and 625-line systems in 4:3 and 16:9 formats.

- [CCIR Report 624-4 - Characteristics of television systems](docs/video_formats/BT-624-4-1990/BT-624-4-1990.md)  
	Reference report listing the operating characteristics of conventional monochrome and colour television systems in use at the time. Covers 525-line and 625-line systems, including NTSC, PAL, and SECAM families.

- [EBU Tech. 3213-E - Standard for chromaticity tolerances for studio monitors](docs/video_formats/EBU-Tech-3213-E/EBU-Tech-3213-E.md)  
	Specifies monitor phosphor chromaticity targets and tolerances to maintain consistent colour reproduction in broadcast environments. Focuses on 625-line/50-field studio systems used with PAL and SECAM.

- [EBU Tech. 3280-E - Specification of interfaces for 625-line digital PAL signals](docs/video_formats/EBU-Tech-3280-E/EBU-Tech-3280-E.md)  
	Defines parallel and serial interfaces for interconnecting equipment handling composite digital PAL video. Covers 625-line digital PAL systems.

- [SMPTE 170M-2004 - Composite analog video signal - NTSC for studio applications](docs/video_formats/SMPTE-170M-2004/SMPTE-170M-2004.md)  
	Specifies the studio composite analogue NTSC signal, including timing, levels, encoding, and colorimetry. Covers 525-line, 59.94-field, 4:3 NTSC studio applications.

- [SMPTE 244M-2003 - Bit-parallel digital interface for NTSC composite video signals](docs/video_formats/SMPTE-244M-2003/SMPTE-244M-2003.md)  
	Defines a bit-parallel digital interface and sampling structure for encoded NTSC composite video. Covers 525-line, 59.94 Hz NTSC systems sampled at four times colour subcarrier frequency.

### Video metadata

- [ANSI/CTA-608-E S-2019 - Line 21 Data Services](docs/video_metadata/ANSI-CTA-608-E-S-2019/ANSI-CTA-608-E-S-2019.md)  
	Specifies Line 21 closed captioning, text, and Extended Data Services (XDS) data formats, signal characteristics, packet definitions, encoder/decoder behavior, and related regulatory and implementation guidance.

- [IEC 60461:2010 - Time and control code](docs/video_metadata/IEC-60461-2010-Time-and-control-code/IEC-60461-2010-Time-and-control-code.md)  
	Specifies time address, flag bits, binary groups, and linear and vertical interval transport structures for time and control code across television, film, and audio systems.

### LaserDisc and Laservision

- [IEC 60856:1986 - Laservision PAL](docs/laserdisc/IEC-60856-1986-Laservision-PAL/IEC-60856-1986-Laservision-PAL.md)  
	Base mechanical, optical, and operational specification for prerecorded reflective optical videodiscs in the Laservision system. Covers 50 Hz, 625-line PAL-compatible LaserDisc media.

- [IEC 60856:1986 Amendment 1 - Laservision PAL](docs/laserdisc/IEC-60856-1986-Laservision-PAL-Amendment-1/IEC-60856-1986-Laservision-PAL-Amendment-1.md)  
	Adds push-pull radial differential tracking signal requirements to the PAL Laservision specification. Covers PAL LaserDisc tracking and measurement characteristics.

- [IEC 60856:1986 Amendment 2 - Laservision PAL](docs/laserdisc/IEC-60856-1986-Laservision-PAL-Amendment-2/IEC-60856-1986-Laservision-PAL-Amendment-2.md)  
	Updates PAL Laservision mechanical and optical requirements and adds provisions related to digital audio implementation. Covers PAL LaserDisc disc construction and extended format details.

- [IEC 60857:1986 - Laservision NTSC](docs/laserdisc/IEC-60857-1986-Laservision-NTSC/IEC-60857-1986-Laservision-NTSC.md)  
	Base mechanical, optical, and operational specification for prerecorded reflective optical videodiscs in the Laservision system. Covers 60 Hz, 525-line M/NTSC-compatible LaserDisc media.

- [IEC 60857:1986 Amendment 1 - Laservision NTSC](docs/laserdisc/IEC-60857-1986-Laservision-NTSC-Amendment-1/IEC-60857-1986-Laservision-NTSC-Amendment-1.md)  
	Adds push-pull radial differential tracking signal requirements to the NTSC Laservision specification. Covers NTSC LaserDisc tracking and measurement characteristics.

- [IEC 60857:1986 Amendment 2 - Laservision NTSC](docs/laserdisc/IEC-60857-1986-Laservision-NTSC-Amendment-2/IEC-60857-1986-Laservision-NTSC-Amendment-2.md)  
	Updates NTSC Laservision mechanical and optical requirements and adds provisions related to digital audio implementation. Covers NTSC LaserDisc disc construction and extended format details.

### VHS

- [JVC Video Technical Guide VTG82063](docs/vhs/JVC-Video-Technical-Guide-VTG82063/index.md)  
	Technical guide covering VHS and S-VHS format operation, recording and playback systems, mechanism descriptions, servo and signal processing circuits, tuner and audio sections, and related service reference material.
