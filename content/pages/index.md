---
type: PageLayout
title: Home
colors: colors-a
backgroundImage:
  type: BackgroundImage
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 32
  url: /images/DJI_20240618125441_0009_D_DRONEPIC.JPG
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: inset
    title: Avento UAV Photography
    subtitle: ''
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-4
          - pb-2
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col-reverse
        borderRadius: none
        borderStyle: none
        borderColor: border-dark
        borderWidth: 5
      title:
        textAlign: left
        fontWeight: 500
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
    actions:
      - type: Button
        label: 'About me '
        altText: ''
        url: /info
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: secondary
        elementId: ''
    text: >
      This is my website - Here is a collection of my latest projects, a bit
      about me and my contact information
  - colors: colors-f
    type: FeaturedProjectsSection
    elementId: ''
    actions:
      - type: Link
        label: See all projects
        url: /projects
    showDate: true
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/pages/projects/project-one.md
      - content/pages/projects/project-three.md
      - content/pages/projects/project-two.md
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: small
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-end
    subtitle: ''
    title: Projects
  - type: QuoteSection
    quote: |+
      View your work from another angle



    name: '- Will'
    title: Head UAV Photographer at Avento
    colors: colors-b
    elementId: ''
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-9
          - pb-9
          - pl-3
          - pr-4
        justifyContent: center
        borderRadius: xx-large
        borderColor: border-dark
        borderWidth: 6
        borderStyle: solid
      quote:
        textAlign: left
      name:
        fontWeight": 500
        textAlign: left
      title:
        fontWeight": 400
        textAlign: left
  - type: TextSection
    colors: colors-e
    variant: variant-b
    title: How much does it cost?
    subtitle: ''
    text: >
      Drone packages start at £75 for a basic photo and video package, email for
      more information
    elementId: ''
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-11
          - pb-5
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
  - type: TextSection
    colors: colors-e
    variant: variant-b
    title: The Section Title
    subtitle: The section subtitle
    text: >-
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    elementId: ''
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-5
          - pb-5
          - pl-5
          - pr-5
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
socialImage: /images/unnamed.png
---
