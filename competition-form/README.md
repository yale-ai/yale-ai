# Competition form kit

Everything needed to build the Rapid-fire Cursor Google Form.

- `google-form.txt`: the title, description, settings, and every question with
  its type, required flag, and validation. Copy them into Google Forms in order.
- `banner.png`: the 1600x400 header image. In Google Forms: Customize theme,
  Header image, Upload, pick this file.
- `banner.html`: the source for the banner. To re-render after edits:

      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
        --hide-scrollbars --window-size=1600,400 --screenshot=banner.png banner.html

The live form is linked from yale-ai.org/win (redirect in `web/next.config.ts`)
and from the competition page at yale-ai.org/competition. Judging notes and
the winners hand-off to SpaceXAI are at the bottom of `google-form.txt`.
