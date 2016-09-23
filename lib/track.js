const track = [
  // SF to 22
  [37.77641362, -122.39509821],
  [37.77503982, -122.39675045],
  [37.77437835, -122.39754438],
  [37.77332678, -122.39887476],
  [37.77247872, -122.39984035],
  [37.77173243, -122.40024805],
  [37.7709522, -122.40007639],
  [37.7702907, -122.39947557],
  [37.76974792, -122.39876747],
  [37.76884894, -122.39769459],
  [37.76762766, -122.39614964],
  [37.76660992, -122.39481926],
  [37.76550734, -122.393682],
  [37.76440475, -122.39305973],
  [37.76309858, -122.39271641],
  [37.7611817, -122.39252329],
  [37.7597228, -122.39233017],
  [37.75792458, -122.39237309],
  [37.75744957, -122.392416],

  // 22 to BAY
  [37.75626204, -122.392416],
  [37.75514234, -122.39243746],
  [37.75368332, -122.39265203],
  [37.75224124, -122.3928237],
  [37.75035801, -122.3931241],
  [37.74894979, -122.39331722],
  [37.74754155, -122.39351034],
  [37.74609935, -122.39370346],
  [37.7442499, -122.39391804],
  [37.74251917, -122.39421844],
  [37.74000786, -122.39458323],
  [37.7375813, -122.39488363],
  [37.734968, -122.39524841],
  [37.73221884, -122.39563465],
  [37.72967323, -122.39599943],
  [37.72604134, -122.39649296],
  [37.72490422, -122.39666462],
  [37.72347855, -122.3970294],
  [37.72021977, -122.39820957],
  [37.71721545, -122.39928246],
  [37.71343018, -122.40061283],
  [37.71103671, -122.40147114],
  [37.7097296, -122.40177155],
  [37.70835456, -122.40183592],
  [37.70748879, -122.40183592],

  //BAY to SSF
  [37.70127527, -122.40181446],
  [37.69594414, -122.40185738],
  [37.69356708, -122.4016428],
  [37.69210685, -122.40134239],
  [37.69023906, -122.40056992],
  [37.68813351, -122.39945412],
  [37.68449958, -122.39649296],
  [37.68022016, -122.39288807],
  [37.67757086, -122.39065647],
  [37.67614428, -122.38996983],
  [37.67415721, -122.3896265],
  [37.67298533, -122.38973379],
  [37.67160961, -122.39022732],
  [37.66980925, -122.39149332],
  [37.66727848, -122.39396095],
  [37.66342272, -122.39767313],
  [37.66026322, -122.40076303],
  [37.65769815, -122.40318775],
  [37.65593143, -122.40490437],
  [37.65538782, -122.40552664],

  // SSF TO SB
  [37.65423262, -122.40657806],
  [37.65005338, -122.41005421],
  [37.64667245, -122.41211414],
  [37.64417487, -122.41286516],
  [37.64154128, -122.41316557],
  [37.63731035, -122.41312265],
  [37.63457457, -122.41305828],
  [37.63302821, -122.41288662],
  [37.63188966, -122.41245747],
  [37.63053017, -122.41170645],
  [37.62957852, -122.41110563],

  // SB TO MB
  [37.62454815, -122.40825176],
  [37.62288261, -122.40728617],
  [37.6191945, -122.4045825],
  [37.61377248, -122.40048409],
  [37.61144378, -122.39855289],
  [37.60486524, -122.39179373],
  [37.60071722, -122.38771677],
  [37.59983319, -122.38672972],

  //MB TO BW
  [37.59668799, -122.38348961],
  [37.5956849, -122.38181591],
  [37.59359366, -122.37707376],
  [37.59058422, -122.36979961],
  [37.5882888, -122.36434937],

  //BW TO BG
  [37.58740462, -122.36233234],
  [37.58471801, -122.3559165],
  [37.58266047, -122.35098124],
  [37.58092598, -122.34688282],
  [37.57995668, -122.34462976],

  //BG TO SM
  [37.577848, -122.33945847],
  [37.5764195, -122.33623981],
  [37.5747699, -122.33233452],
  [37.57356243, -122.33018875],
  [37.57186174, -122.32795715],
  [37.5694807, -122.32540369],
  [37.56784795, -122.32357979],

  // SM TO HP
  [37.5656879, -122.32119799],
  [37.56279639, -122.31812954],
  [37.56009188, -122.31501818],
  [37.55754036, -122.3122716],
  [37.55623055, -122.3111558],
  [37.5544274, -122.31012583],
  [37.55349178, -122.30965376],

  // HP TO HD
  [37.55136534, -122.30866671],
  [37.55010645, -122.30791569],
  [37.5489156, -122.30692863],
  [37.54563214, -122.30411768],
  [37.5421784, -122.30119944],
  [37.54051102, -122.29980469],
  [37.53916688, -122.29860306],
  [37.53843525, -122.29791641],

  // HD TO BM
  [37.53617225, -122.29581356],
  [37.5351173, -122.29484797],
  [37.53430055, -122.29379654],
  [37.53283719, -122.29197264],
  [37.5304549, -122.28849649],
  [37.52756203, -122.28426933],
  [37.52648994, -122.28261709],
  [37.52397131, -122.27950573],
  [37.52215036, -122.27742434],
  [37.52126539, -122.27632999]

  // BM TO SC
  // [, ],
  // [, ],
  // [, ],
  // [, ],
];