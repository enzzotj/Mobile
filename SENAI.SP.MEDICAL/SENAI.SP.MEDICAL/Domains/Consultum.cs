using System;
using System.Collections.Generic;

#nullable disable

namespace SENAI.SP.MEDICAL.Domains
{
    public partial class Consultum
    {
        public short IdConsulta { get; set; }
        public short? IdSituacao { get; set; }
        public short? IdPaciente { get; set; }
        public short? IdMedico { get; set; }
        public DateTime DataConsulta { get; set; }
        public string Descricao { get; set; }

        public string nomePaciente { get; set; }

        public string nomeMedico { get; set; }
        public string situacao { get; set; }

        public virtual Medico IdMedicoNavigation { get; set; }
        public virtual Paciente IdPacienteNavigation { get; set; }
        public virtual Situacao IdSituacaoNavigation { get; set; }
    }
}
