exports.homepage = async (req, res) => {
  const locals = {
    title: "QuickQuill | online notes",
    description: "Create, save, update, and delete your online notes for free.",
  }
  res.render('index', {
    locals,
    layout: '../views/layouts/front-page'
  });
}

exports.about = async (req, res) => {
  const locals = {
    title: "QuickQuill - About",
    description: "Create, save, update, and delete your online notes for free.",

  }
  res.render('about', locals);
}