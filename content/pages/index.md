---
type: PageLayout
title: Home
colors: colors-b
backgroundImage:
  type: BackgroundImage
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 100
sections:
  - elementId: ''
    colors: colors-b
    backgroundSize: full
    title: ''
    subtitle: >-
      This is my website - Here is a collection of my latest projects, a bit
      about me and my contact information
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
        fontWeight: 400
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
  - colors: colors-e
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
      - content/pages/projects/project-two.md
      - content/pages/projects/project-one.md
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
socialImage: /images/unnamed.png
---
