# Photo Extraction Guide

Extract the following 4 photos from the PDF presentation:
`/Users/rodrigofaerman/Downloads/2026-01-09 Business Therapy Code - Apresentacao v4.pptx.pdf`

## Photos to Extract

### 1. carolina-hero.jpg
- **PDF Page**: 1
- **Description**: Carolina in coral/red blazer, professional half-body shot, hair down, smiling
- **Recommended Size**: 640x800px (4:5 ratio)
- **Usage**: Hero section

### 2. carolina-about.jpg
- **PDF Page**: 2
- **Description**: Carolina seated in white top + polka dot skirt, thoughtful pose, hand on chin
- **Recommended Size**: 640x800px (4:5 ratio)
- **Usage**: About section

### 3. carolina-presenting.jpg
- **PDF Page**: 8
- **Description**: Carolina presenting, white outfit with brown belt, projector in background
- **Recommended Size**: 640x800px (4:5 ratio)
- **Usage**: Methodology/Empathy section

### 4. carolina-closing.jpg
- **PDF Page**: 22
- **Description**: Carolina with microphone, coral dress over white blouse, arm raised
- **Recommended Size**: 640x800px (4:5 ratio)
- **Usage**: Closing/Final CTA section

## Extraction Options

### Option A: Using Preview (macOS)
1. Open PDF in Preview
2. Go to the specific page
3. Use Rectangle Selection tool to select the photo
4. Copy (Cmd+C)
5. File > New from Clipboard
6. Save as JPEG

### Option B: Using Adobe Acrobat
1. Open PDF in Acrobat
2. Tools > Export PDF > Image > JPEG
3. Select specific pages
4. Crop to photo area

### Option C: Using Online Tools
- iLovePDF (https://www.ilovepdf.com/pdf_to_jpg)
- SmallPDF (https://smallpdf.com/pdf-to-jpg)

## After Extraction

1. Save photos in this folder (`assets/images/`)
2. Update `index.html` - replace the placeholder divs with actual `<img>` tags
3. The commented code in HTML shows the exact replacement needed

## Image Optimization

Before using, optimize images:
- Use TinyPNG or Squoosh to compress
- Target file size: under 200KB each
- Format: JPEG for photos, WebP for modern browsers

## Replacement Code

After adding the images, update the HTML by uncommenting the img tags:

```html
<!-- Hero -->
<img src="assets/images/carolina-hero.jpg"
     alt="Carolina Arslanian - Mentora Executiva"
     class="carolina-photo">

<!-- About -->
<img src="assets/images/carolina-about.jpg"
     alt="Carolina Arslanian pensativa"
     class="carolina-photo carolina-photo-rounded">

<!-- Presenting -->
<img src="assets/images/carolina-presenting.jpg"
     alt="Carolina Arslanian apresentando"
     class="carolina-photo carolina-photo-rounded">

<!-- Closing -->
<img src="assets/images/carolina-closing.jpg"
     alt="Carolina Arslanian com microfone"
     class="carolina-photo">
```
