export const getLucky = (req, res) => {
    res.send('hello');
}

export const getForm = (req, res) => {
    console.log(req.body)
  }